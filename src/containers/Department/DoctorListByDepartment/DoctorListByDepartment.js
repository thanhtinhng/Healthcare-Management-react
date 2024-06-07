import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import { getDoctorByDepartment } from '../../../services/userService';
import './DoctorListByDepartment.scss';
import images from './ImageDoctor';
import { withRouter } from 'react-router-dom';

class DoctorListByDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctor: [],
            }
        }
            
    getDoctorArray = async (id) => {
        let arr = await getDoctorByDepartment(id)
        this.setState({
            arrDoctor: arr.doctors,
        })
    }

    handleViewDoctor = (id) => {
        this.props.history.push(`/doctor/${id}`)
    }

    getDepartmentName = () => {
        let departmentName = ''
        switch (this.props.match.params.id) {
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

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            await this.getDoctorArray(this.props.match.params.id)
        }
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
    
        const { arrDoctor } = this.state;

        return (
            <div>
                <HomeHeader isShowBanner={false}/>
                <div className='background'>
                    <div className='department-name'>Chuyên khoa {this.getDepartmentName()}</div>
                    <div className="doctor-list-container">
                        {arrDoctor && arrDoctor.length > 0 ? (
                            arrDoctor.map((doctor) => (
                                <div key={doctor.DoctorID} className="doctor-card" onClick={() => this.handleViewDoctor(doctor.DoctorID)}>
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
                                    <div className="doctor-info">
                                        <h2 className="doctor-name">{doctor.DoctorName}</h2>
                                        <p><strong>Chuyên môn:</strong> {doctor.Specialization}</p>
                                        <p><strong>Điện thoại:</strong> {doctor.DoctorPhone}</p>
                                        <p><strong>Email:</strong> {doctor.DoctorEmail}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-doctors">No doctors available.</p>
                        )}
                    </div>
                </div>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorListByDepartment));
