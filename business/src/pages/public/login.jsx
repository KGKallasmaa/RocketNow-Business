import React from 'react';
import {Form, Icon, Spin} from 'antd';
import logo from '../../assets/img/logo.svg';
import {Redirect} from 'react-router-dom';
import {Helmet} from "react-helmet";

import '../../assets/css/login.min.css';
import {businessLogin_QUERY} from "../../graphql/public/businessLogin_QUERY";
import AcceptsCookies from "../../components/cookieConsent";
import LazyLoad from 'react-lazyload';

import 'antd/es/form/style/css';
import 'antd/es/icon/style/css';

import 'antd/es/spin/style/css';
import {fetchData} from "../../components/fetcher";

const antIcon = <Icon type="loading" theme="twoTone" twoToneColor="#fffffff" style={{fontSize: 33}} spin/>;

const headingStyle = {
    color: "rgb(139,139,139)",
    marginBottom: "0px",
    fontWeight: "400",
    fontSize: "27px"
};
const logoHeight = {
    height: "150px"
};

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            canSubmit: false,
            login_user: false,
            formErrors: {email: '', password: ''},
            formValidity: {email: false, password: false}
        };
        this.handleChange = this.handleChange.bind(this);
        this.BusinessLoginSubmit = this.BusinessLoginSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        }, function () {
            this.validateField(name, value)
        })
    }

    validateField(name, value) {
        const fieldValidationErrors = this.state.formErrors;
        const validity = this.state.formValidity;

        validity[name] = value.length > 0;
        let capitalizeFirstLetter = function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        fieldValidationErrors[name] = capitalizeFirstLetter(validity[name] ? '' : `${name} is required and cannot be empty.`);

        this.setState({
            formErrors: fieldValidationErrors,
            formValidity: validity,
        }, () => this.canSubmit())
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'is-invalid');
    }

    canSubmit() {
        this.setState({
            canSubmit:
                this.state.formValidity.email &&
                this.state.formValidity.password &&
                this.state.login_user === false
        });
    }

    BusinessLoginSubmit = async (event) => {
        event.preventDefault();
        this.setState({login_user: true});
        const {email, password} = this.state;

        const variables = {
            email: email,
            password: password,
        };

        let fetchBusinessUserLogin = fetchData(variables, businessLogin_QUERY);
        let businessUserLogin = await fetchBusinessUserLogin;
        if (businessUserLogin !== null) {
            localStorage.setItem("jwtToken_business", businessUserLogin.businessLogin.token);
            localStorage.setItem("jwtToken_expires_business", businessUserLogin.businessLogin.tokenExpiration);
            localStorage.setItem("businessDisplayName", businessUserLogin.businessLogin.businessDisplayName);
            localStorage.setItem("businessLegalName", businessUserLogin.businessLogin.businessLegalName);
            localStorage.setItem("logoURL", businessUserLogin.businessLogin.logoURL);

            this.setState({
                redirect: true,
                login_user: false
            });
            return true;
        }
        else{
            this.setState({
                redirect: false,
                login_user: false
            });
            return false;
        }
    };

    renderRedirect = () => {
        const {redirect, from} = this.state;
        if (redirect === true) {
            let redirectUrl = "/";
            if (from) {
                redirectUrl = "/" + from;
            }
            return <Redirect to={redirectUrl}/>
        }
    };

    render() {
        const login_user_status = this.state.login_user;
        return (
            <div className="d-flex flex-column justify-content-center" id="login-box">
                <Helmet>
                    <title>Login</title>
                    <meta property="og:title" content="Login"/>
                    <link rel="canonial" href={process.env.REACT_APP_PUBLIC_URL + "/login"}/>
                    <meta property="og:description"
                          content="Loging in to RocketNow unlocks a whole new world"/>
                    <meta name="description" content="Signing up to RocketNow unlocks a whole new world"/>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
                </Helmet>

                <div className="login-box-header">
                    <h4 style={headingStyle}>
                        <LazyLoad>
                            <img src={logo}
                                 style={logoHeight}
                                 alt="RocketNow logo"/>
                        </LazyLoad>
                    </h4>
                </div>
                <div className="email-login">
                    <Form onSubmit={this.BusinessLoginSubmit} className="login-form">
                        <Form.Item>
                            <label htmlFor="email">Email</label>
                            <input
                                className={`form-control ${this.errorClass(this.state.formErrors.email)}`}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <div className="invalid-feedback">{this.state.formErrors.email}</div>
                        </Form.Item>
                        <Form.Item>
                            <label htmlFor="password">Password</label>
                            <input
                                className={`form-control ${this.errorClass(this.state.formErrors.password)}`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <span>Forgot your password? <a href="/reset/password">Reset it!</a></span>
                            <div className="invalid-feedback">{this.state.formErrors.password}</div>
                        </Form.Item>
                        <Form.Item>
                            <p>By logging in I agree to <a href="http://rocketnow.eu/tos">Terms of Service</a> and <a
                                href="http://rocketnow.eu/privacy">Privacy
                                Policy</a>
                            </p>
                        </Form.Item>
                        <Form.Item>
                            <button className="btn btn-primary btn-block box-shadow"
                                    id="submit-id-submit"
                                    disabled={!this.state.canSubmit}
                                    type="submit"
                                    style={{backgroundColor: "#1e96ff"}}>
                                {(login_user_status === true) ? <Spin indicator={antIcon}/> : ''}
                                {(login_user_status === true) ? '' : 'Log in'}
                            </button>
                        </Form.Item>
                    </Form>
                    {this.renderRedirect()}
                    <div id="login-box-footer"
                         style={{padding: "10px 20px", paddingBottom: "23px", paddingTop: "18px"}}>
                        <p> Don't have a business account?
                            <a id="register-link" href="/signup">
                                Sign up!
                            </a>
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <AcceptsCookies/>
            </div>
        );
    }
}

export default Form.create()(NormalLoginForm);