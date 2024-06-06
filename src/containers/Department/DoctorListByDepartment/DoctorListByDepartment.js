import React, { Component } from 'react';
import { connect } from "react-redux";

class DoctorListByDepartment extends Component {
    render() {
        return (
            <div>Doctor list</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorListByDepartment);
