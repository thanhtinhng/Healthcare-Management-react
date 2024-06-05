import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Department.scss';
import '../../assets/themify-icons/themify-icons.css'


class Department extends Component {

    render() {
        return (
            <React.Fragment>            
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Department);
