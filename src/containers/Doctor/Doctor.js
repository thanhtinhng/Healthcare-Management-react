import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader.js';
import { getDoctorById } from '../../services/userService.js';
import './Doctor.scss';
import images from '../Department/DoctorListByDepartment/ImageDoctor.js';

class Doctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctor: ''
        }
    }

    getDoctor = async (id) => {
        let doctorGet = await getDoctorById(id)
        this.setState({
            doctor: doctorGet.doctor
        })
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            await this.getDoctor(this.props.match.params.id)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    async testApi(id) {
        let doctor = await getDoctorById(id)
        console.log('test api', doctor)
    }
    
    render() {

        const { doctor } = this.state
        const today = new Date().toISOString().split('T')[0]

        return (
            <Fragment>
                <HomeHeader />
                {doctor ? (
                    <div className='doctor-container'>
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
                                <p><strong>Chuyên môn:</strong> {doctor.Specialization}</p>
                                <p><strong>Điện thoại:</strong> {doctor.DoctorPhone}</p>
                                <p><strong>Email:</strong> {doctor.DoctorEmail}</p>
                            </div>
                            <div className="appointment">
                                <h3>Đặt lịch khám bệnh</h3>
                                <label>
                                    <b>Chọn ngày: </b>
                                    <input type="date" className="appointmentDate" min={today} required />
                                </label>
                                <br></br>
                                <b>Chọn giờ:</b>
                                <div className="appointment-times">
                                    <div className="time-slot">7:00 - 7:30</div>
                                    <div className="time-slot">7:30 - 8:00</div>
                                    <div className="time-slot">8:00 - 8:30</div>
                                    <div className="time-slot">8:30 - 9:00</div>
                                    <div className="time-slot">9:00 - 9:30</div>
                                    <div className="time-slot">9:30 - 10:00</div>
                                    <div className="time-slot">10:00 - 10:30</div>
                                    <div className="time-slot">10:30 - 11:00</div>
                                    <div className="time-slot">13:00 - 13:30</div>
                                    <div className="time-slot">13:30 - 14:00</div>
                                    <div className="time-slot">14:00 - 14:30</div>
                                    <div className="time-slot">14:30 - 15:00</div>
                                    <div className="time-slot">15:00 - 15:30</div>
                                    <div className="time-slot">15:30 - 16:00</div>
                                </div>
                                <div className='appoint-btn'>Đặt lịch</div>
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
