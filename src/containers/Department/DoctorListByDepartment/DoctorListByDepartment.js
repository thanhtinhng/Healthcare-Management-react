import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import * as actions from '../../../store/actions'
import { getDoctorByDepartment } from '../../../services/userService';

class DoctorListByDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctor: '',
        }
    }

    testapi = async (id) => {
        let res = await getDoctorByDepartment(id)
        console.log('test api', res, id)
    }

    getDoctorArray = async (id) => {
        let arr = await getDoctorByDepartment(id)
        this.setState({
            arrDoctor: arr.doctors,
        })
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            this.getDoctorArray(this.props.match.params.id)
        }
        this.props.loadDoctorByDepartment()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    
    render() {
        // let content;
        // switch(this.props.match.params.id) {
        //     case '1':
        //         content = <div>Nội dung cho department 1</div>;
        //         break;
        //     case '2':
        //         content = <div>Nội dung cho department 2</div>;
        //         break;
        //     default:
        //         content = <div>Nội dung mặc định</div>;
        // }

        //console.log(this.props.doctorByDepartmentRedux)
        console.log(this.state.arrDoctor)

        return (
            <div>
                <HomeHeader isShowBanner={false}/>
                <div onClick={() => this.testapi(this.props.match.params.id)}>hello</div>
                {/* {content} */}
                {/* {arrDoctor && arrDoctor.length > 0 &&
                    return (

                    )
                } */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //doctorByDepartmentRedux: state.admin.doctorByDepartment
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadDoctorByDepartment: () => dispatch(actions.fetchDoctorByDepartment())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorListByDepartment);
