import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Department.scss';
import '../../assets/themify-icons/themify-icons.css'
import HomeHeader from '../HomePage/HomeHeader';
import images from './ImageDepartment';
import { withRouter } from 'react-router-dom';


class Department extends Component {

    handleViewListDoctor = (index) => {
        this.props.history.push(`/doctor-list/${index}`);    
    }

    render() {
        return (
            <React.Fragment>            
                <HomeHeader isShowBanner={false}></HomeHeader>
                    <div className='department-container'>
                        <div className='navigation'>
                            <i className='ti-home'>/</i><p>Khám chuyên khoa</p>
                        </div>
                        <div className='department-option'>
                            <div className='department-child' onClick={() => this.handleViewListDoctor('TMH')}>
                                <div className='department-img'><img src={images.tai_mui_hong} alt="Tai Mui Hong" /></div>
                                <div className='department-name'><b>Tai Mũi Họng</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('TH')}>
                                <div className='department-img'><img src={images.tieu_hoa} alt="Tieu Hoa" /></div>
                                <div className='department-name'><b>Tiêu hóa</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('TM')}>
                                <div className='department-img'><img src={images.tim_mach} alt="Tim Mach" /></div>
                                <div className='department-name'><b>Tim mạch</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('CXK')}>
                                <div className='department-img'><img src={images.co_xuong_khop} alt="Co Xuong Khop" /></div>
                                <div className='department-name'><b>Cơ Xương Khớp</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('NTK')}>
                                <div className='department-img'><img src={images.than_kinh} alt="Than Kinh" /></div>
                                <div className='department-name'><b>Thần kinh</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('PS')}>
                                <div className='department-img'><img src={images.san_phu_khoa} alt="San Phu Khoa" /></div>
                                <div className='department-name'><b>Sản Phụ khoa</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('DL')}>
                                <div className='department-img'><img src={images.da_lieu} alt="Da Lieu" /></div>
                                <div className='department-name'><b>Da liễu</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('N')}>
                                <div className='department-img'><img src={images.nhi_khoa} alt="Nhi Khoa" /></div>
                                <div className='department-name'><b>Nhi khoa</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('DU')}>
                                <div className='department-img'><img src={images.di_ung_mien_dich} alt="Di Ung Mien Dich" /></div>
                                <div className='department-name'><b>Dị ứng miễn dịch</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('M')}>
                                <div className='department-img'><img src={images.mat} alt="Mat" /></div>
                                <div className='department-name'><b>Mắt</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('T')}>
                                <div className='department-img'><img src={images.than_tiet_nieu} alt="Than Tiet Niẹu" /></div>
                                <div className='department-name'><b>Thận tiết niệu</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('NHA')}>
                                <div className='department-img'><img src={images.nha_khoa} alt="Nha Khoa" /></div>
                                <div className='department-name'><b>Nha khoa</b></div>
                            </div>

                            <div className='department-child' onClick={() => this.handleViewListDoctor('YHCT')}>
                                <div className='department-img'><img src={images.y_hoc_co_truyen} alt="Y Hoc Co Truyen" /></div>
                                <div className='department-name'><b>Y học cổ truyền</b></div>
                            </div>
                        </div>
                    </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Department));
