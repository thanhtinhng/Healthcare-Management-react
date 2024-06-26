import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import '../../assets/themify-icons/themify-icons.css'
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {

    handleClickDepartment = () => {
        this.props.history.push('/department');
    }

    handleClickHome = () => {
        this.props.history.push('/home')
    }

    render() {

        return (
            <React.Fragment>        
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className="fa fa-bars"></i>
                        <div className='header-logo' onClick={() => {this.handleClickHome()}}></div>
                    </div>

                    <div className='center-content'>
                        <div className='child-content' onClick={() => {this.handleClickDepartment()}}>
                            <div><b>Chuyên khoa</b></div>
                            <div className='sub-title'>Tìm bác sĩ theo chuyên khoa</div>
                        </div>

                        <div className='child-content'>
                            <div><b>Cơ sở y tế</b></div>
                            <div className='sub-title'>Chọn bệnh viên phòng khám</div>
                        </div>

                        <div className='child-content'>
                            <div><b>Bác sĩ</b></div>
                            <div className='sub-title'>Chọn bác sĩ giỏi</div>
                        </div>
                        
                        <div className='child-content'>
                            <div><b>Gói khám</b></div>
                            <div className='sub-title'>khám sức khỏe tổng quát</div>
                        </div>
                    </div>

                    <div className='right-content'>
                        <div className='support'>
                            <i className="fas fa-question-circle"></i>
                            Hỗ trợ
                        </div>
                    </div>
                </div>
            </div>
            {this.props.isShowBanner === true &&
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='tittle1'>NỀN TẢNG Y TẾ</div>
                        <div className='tittle2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'>
                            <i className="search-icon ti-search"></i>
                            <input type='text' placeholder='Tìm bác sĩ theo chuyên khoa'></input>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child' onClick={() => {this.handleClickDepartment()}}>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='ti-mobile'></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='ti-agenda'></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-vial'></i></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'><i className='ti-face-smile'></i></div>
                                <div className='text-child'>Sức khỏe tinh thần</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
