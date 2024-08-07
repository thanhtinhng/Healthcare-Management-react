import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from "../../services/userService"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          username: '',
          password: '',
          errMessage: '',
        }
    }

    handdleOnChangeUsername = (event) => {
      this.setState({
        username: event.target.value
      })
    }

    handleOnchangePassword = (event) => {
      this.setState({
        password: event.target.value
      })
    }

    handleLogin = async () => {
      this.setState({
        errMessage: ''
      })
      try {
        let data = await handleLoginApi(this.state.username, this.state.password)
        if (data && data.errCode !== 0) {
          this.setState({
            errMessage: data.message
          })
        }
        if (data && data.errCode === 0) {
          this.setState ({
            user: data.user
          })
          localStorage.setItem('user', JSON.stringify(data.user))
          this.props.userLoginSuccess(data.user)
        }
        console.log(this.state.user)
      } catch (error) {
        if (error.response){
          if (error.response.data){
            this.setState({
              errMessage: error.response.data.message
            })
          }
        }
        console.log(error.response)
      }
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

                  {/* <form action="" method="" id="registerForm"> */}

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email<span className="required"> *</span></label>
                      <input 
                        type="email" id="email" name="email" className="form-control form-control-lg" required
                        value={this.state.username}
                        onChange={(event) => this.handdleOnChangeUsername(event)}
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline">
                      <label className="form-label" htmlFor="password">Mật khẩu<span className="required"> *</span></label>
                      <input 
                        type="password" id="password" name="password" className="form-control form-control-lg" required
                        value = {this.state.password}
                        onChange={(event) => this.handleOnchangePassword(event)}
                      />
                    </div>

                    <div className='col-12 mb-4' style={{color: 'red'}}>{this.state.errMessage}</div>

                    <div className="d-flex justify-content-center" >
                      <button 
                        style={{width: '60%'}} data-mdb-button-init data-mdb-ripple-init id='loginBtn' className="btn btn-success btn-block btn-lg gradient-custom-4 text-body
                        " onClick={() => {this.handleLogin()}}>
                          Đăng nhập
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Chưa có tài khoản? <a href="http://localhost:8080/crud" className="fw-bold text-body"><u>Đăng ký</u></a></p>

                  {/* </form> */}

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
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
