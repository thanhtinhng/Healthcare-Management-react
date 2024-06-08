import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader.js';
import { getDoctorById } from '../../services/userService.js';
import { postAppointment } from '../../services/userService.js';
import './Doctor.scss';
import images from '../Department/DoctorListByDepartment/ImageDoctor.js';

class Doctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctor: '',
            user: '',
            selectedTime: '',
            selectedDate:'',
            errMessage: '',
            errCode:''
        }
    }

    getDoctor = async (id) => {
        let doctorGet = await getDoctorById(id)
        this.setState({
            doctor: doctorGet.doctor
        })
    }

    getDepartmentName = (id) => {
        let departmentName
        switch (id) {
            case 'TMH':
                departmentName = 'Tai Mũi Họng'
                return departmentName
            case 'TH':
                departmentName = 'Tiêu hóa'
                return departmentName
            case 'TM':
                departmentName = 'Tim mạch'
                return departmentName
            case 'CXK':
                departmentName = 'Cơ Xương Khớp'
                return departmentName
            case 'NTK':
                departmentName = 'Thần kinh'
                return departmentName
                
            case 'PS':
                departmentName = 'Phụ sản'
                return departmentName
                
            case 'DL':
                departmentName = 'Da liễu'
                return departmentName
                
            case 'N':
                departmentName = 'Nhi'
                return departmentName
                
            case 'DU':
                departmentName = 'Dị ứng miễn dịch'
                return departmentName
                
            case 'M':
                departmentName = 'Mắt'
                return departmentName
                
            case 'T':
                departmentName = 'Thận tiết niệu'
                return departmentName
                
            case 'NHA':
                departmentName = 'Nha khoa'
                return departmentName
                
            case 'YHCT':
                departmentName = 'Y học cổ truyền'
                return departmentName
                
        }
    }

    handleTimeSlotClick = (timeSlot) => {
        const [startTime] = timeSlot.split(' - ');
        this.setState({ selectedTime: startTime });
    };

    handleDateChange = (event) => {
        this.setState({ selectedDate: event.target.value });
    };

    handleAppoint = async () => {
        this.setState({
            errMessage: '',
            errCode: ''
        })
        let userId = this.state.user.PatientID
        let doctorId = this.state.doctor.DoctorID
        let date = this.state.selectedDate
        let time = this.state.selectedTime
        try {
            let data = await postAppointment(date, time, doctorId, userId)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                    errCode: data.errCode
                })
            }
            else if (data && data.errCode === 0) {
                this.setState({
                    errMessage: 'Đặt lịch thành công!',
                    errCode: data.errCode
                })
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState ({
                        errMessage: error.response.data.message,
                        errCode: error.response.data.errCode
                    })
                }
            }
        }

    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            await this.getDoctor(this.props.match.params.id)
        }

        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({ user })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    
    testState() {
        console.log(this.state.selectedDate, this.state.selectedTime, this.state.user, this.state.errMessage)
    }

    render() {

        console.log('test local storage', this.state.user)
        const { doctor } = this.state
        const today = new Date().toISOString().split('T')[0]

        const timeSlots = [
            '7:00 - 7:30', '7:30 - 8:00', '8:00 - 8:30', '8:30 - 9:00',
            '9:00 - 9:30', '9:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00',
            '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00',
            '15:00 - 15:30', '15:30 - 16:00'
        ];

        return (

            <Fragment>
                <HomeHeader />
                {doctor ? (
                    <div className='doctor-container'>
                        <h3 className='thong-tin-bac-si' onClick={() => this.testState()}>Thông tin bác sĩ</h3>
                        <div className='doctor-sub-container'>
                            <div className='doctor-avatar'>
                                {images[doctor.DoctorID] ? (
                                    <div className="doctor-image">
                                        <img src={images[doctor.DoctorID]} alt={doctor.DoctorName} />
                                    </div>
                                    ) : (
                                        <div className="doctor-image">
                                            <img src={images[0]} alt={doctor.DoctorName} />
                                        </div>
                                    )
                                }
                            </div>
                            <div className='doctor-detail'>
                                <div className="doctor-info">
                                    <h2 className="doctor-name">{doctor.DoctorName}</h2>
                                    <p><strong>Chuyên khoa:</strong> {this.getDepartmentName(doctor.Department)}</p>
                                    <p><strong>Chuyên môn:</strong> {doctor.Specialization}</p>
                                    <p><strong>Điện thoại:</strong> {doctor.DoctorPhone}</p>
                                    <p><strong>Email:</strong> {doctor.DoctorEmail}</p>
                                </div>
                                <div className="appointment">
                                    <h3>Đặt lịch khám bệnh</h3>
                                    <label>
                                        <b>Chọn ngày: </b>
                                        <input
                                            id='date' 
                                            name='date' 
                                            type="date" 
                                            className="appointmentDate" 
                                            min={today} 
                                            value={this.state.selectedDate}
                                            onChange={(event) => this.handleDateChange(event)}
                                            required />
                                    </label>
                                    <br></br>
                                    <b>Chọn giờ:</b>
                                    <div className="appointment-times">
                                        {timeSlots.map((slot) => (
                                            <div
                                                className={`time-slot ${this.state.selectedTime === slot.split(' - ')[0] ? 'selected' : ''}`}
                                                onClick={() => this.handleTimeSlotClick(slot)}>
                                                {slot}
                                            </div>
                                        ))}
                                    </div>
                                    {this.state.errCode === 0 ? (
                                        <div className='col-12 mb-4' style={{color: 'green'}}>{this.state.errMessage}</div>
                                    ) : (
                                        <div className='col-12 mb-4' style={{color: 'red'}}>{this.state.errMessage}</div>
                                    )}
                                    {/* <div className='col-12 mb-4' style={{color: 'red'}}>{this.state.errMessage}</div> */}
                                    <div className='appoint-btn' onClick={() => this.handleAppoint()}>Đặt lịch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="no-doctors">No doctors available.</p>
                )}
            </Fragment>
            );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
