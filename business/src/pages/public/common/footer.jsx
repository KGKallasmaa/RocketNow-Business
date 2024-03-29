import React from 'react';
import {Helmet} from "react-helmet";

const color = {color: "#ffffff"};

export default React.memo(() => {
        return (
            <div className="footer-dark">
                <Helmet>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"/>
                </Helmet>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={color}>Services</h3>
                                <ul>
                                    <li><a aria-label={"Sell your goods on RocketNow"} href="/">Sell on
                                        RocketNow</a></li>
                                    <li><a aria-label={"Learn more about the affiliate program"} href="/affiliate">Affiliate program</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={color}>About</h3>
                                <ul>
                                    <li><a aria-label={"Read the story of RocketNow"}
                                           href="http://rocketnow.eu/about">About</a></li>
                                    <li><a aria-label={"See the careers that are currently available"}
                                           href="http://rocketnow.eu/careers">Careers</a></li>
                                    <li><a aria-label={"Please contact us for any inquiries"}
                                           href="http://rocketnow.eu/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={color}>Legal</h3>
                                <ul>
                                    <li><a aria-label={"Read the terms of service"} href="http://rocketnow.eu/tos">Terms of
                                        Service</a>
                                    </li>
                                    <li><a aria-label={"Read the privacy policy"} href="http://rocketnow.eu/privacy">Privacy
                                        Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3 style={color}>RocketNow</h3>
                                <ul>
                                    <li>
                                        <a aria-label={"Read the terms of service"} href="http://rocketnow.eu">
                                            A new e-commerce platform
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <br/><br/><br/><br/><br/>
                            <div className="col item social">
                                <a title={"View RocketNow on Facebook"} href="#">
                                    <i className="fab fa-facebook"/>
                                </a>
                                <a title={"View RocketNow on Instagram"} href="#">
                                    <i className="fab fa-instagram"/>
                                </a>
                                <a title={"View RocketNow on LinedIn"} href="#">
                                    <i className="fab fa-linkedin"/>
                                </a>
                            </div>
                        </div>
                        <p className="copyright">Made with&nbsp;❤️ &nbsp;in Estonia 🇪🇪</p>
                        <p className="copyright">© RocketNow Technologies OÜ 2019</p>
                    </div>
                </footer>
            </div>
        );
    }
);