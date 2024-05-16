import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';




class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <section 
      className="bg-image"
      style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}
    >
      <div className="mask d-flex align-items-center gradient-custom-3" style={{ padding: '50px', overflowY: 'auto', height: '100vh' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h4 className="text-uppercase text-center mb-5">Đăng nhập</h4>

                  <form action="" method="" id="registerForm">

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="email" name="email" className="form-control form-control-lg" required/>
                      <label className="form-label" htmlFor="email">Email<span className="required"> *</span></label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="password" name="password" className="form-control form-control-lg" required/>
                      <label className="form-label" htmlFor="password">Mật khẩu<span className="required"> *</span></label>
                    </div>

                    <div className="d-flex justify-content-center" >
                      <button style={{width: '60%'}} type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Đăng nhập</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Chưa có tài khoảng? <a href="http://localhost:8080/crud" className="fw-bold text-body"><u>Đăng ký</u></a></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
    
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
