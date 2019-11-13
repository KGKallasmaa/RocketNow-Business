import React from 'react';
import {isBusinessUserLoggedIn} from "../../components/authentication";
import BusinessHome from "../core/home";
import  AcceptsCookies from "../../components/legal/cookieConsent";
import {Helmet} from "react-helmet";

import Footer from "./common/footer";
import Navbar from "./common/navbar";

import "./assets/css/bootstrap.min.css";
import "./assets/css/home.min.css";

import awesomeProducts from "./assets/img/awesome products.jpg";
import chooseAPlan from "./assets/img/chooseAPlan.jpg";
import businessSupport from "./assets/img/business-support.jpg";
import ogLogo from "./assets/img/og_Logo.png";

import digital from "./assets/img/digital_goods.jpeg";
import electronics from "./assets/img/electronics.jpeg";
import entartainment from "./assets/img/entartainment.jpeg";
import fashion from "./assets/img/fashion.jpeg";
import healthAndBeauty from "./assets/img/health_and_beauty.jpeg";
import subscriptions from "./assets/img/subscribtions.jpeg";
import CustomerChat from "../../components/customerChat/customerChat";

const maxWith = {width: " 100%"};

const pricingName = {
    backgroundColor: "#1e96ff",
    color: "rgb(255,255,255)",
    marginTop: "10px",
    marginRight: "35%",
    marginLeft: "35%"
};
const blueColor = {color: "#1e96ff"};
const whiteColor = {color: "#ffffff"};
const perMonth = {color: "rgb(134,142,150)", fontSize: "16px"};
const pricingButton = {backgroundColor: "#1e96ff", color: "#ffffff"};


export default class Home extends React.PureComponent {
    render() {
        const userIsLoggedIn = isBusinessUserLoggedIn();
        if (userIsLoggedIn) {
            return (
                <BusinessHome/>
            );
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>Business on RocketNow</title>
                    <meta property="og:title" content="Login"/>
                    <link rel="canonial" href="http://business.rocketnow.eu"/>
                    <meta property="og:description"
                          content="It's easy to sell online with RocketNow. Put your products in front of RocketNow customers and increase your visibility."/>
                    <meta name="description"
                          content="It's easy to sell online with RocketNow. Put your products in front of RocketNow customers and increase your visibility."/>
                    <meta name="description"
                          content="It's easy to sell online with RocketNow. Put your products in front of RocketNow customers and increase your visibility."/>
                    <meta property="og:type" content="website"/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content="Business on RocketNow"/>
                    <meta name="twitter:description"
                          content="It's easy to sell online with RocketNow. Put your products in front of RocketNow customers and increase your visibility."/>
                    <meta name="twitter:image" content={ogLogo}/>
                    <meta property="og:image" content={ogLogo}/>
                </Helmet>

                <Navbar/>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container">
                            <h1 className="text-left masthead-heading mb-0" style={whiteColor}>
                                RocketNow
                            </h1>
                            <h2 className="text-left masthead-subheading mb-0" style={whiteColor}>
                                Lifting your Business to new heights
                            </h2>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"/>
                    <div className="bg-circle-2 bg-circle"/>
                    <div className="bg-circle-3 bg-circle"/>
                    <div className="bg-circle-4 bg-circle"/>
                </header>
                <AcceptsCookies/>
                <CustomerChat/>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="rounded-circle img-fluid"
                                         src={awesomeProducts} alt={"Selling products on RocketNow"} loading="lazy"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">For those who have awesome products</h2>
                                    <p>Whether you sell vintage books or tickets to a concert, you're welcome to join
                                        our platform.<br/>We help your business to grow by putting your product in front
                                        of numerous RocketNow customers as well as providing you with analytics
                                        about your consumer base.&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" style={{fontSize: "40px"}}>List by Category</h2>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "30px", width: "110px", marginLeft: "-15px"}}>
                                        Fashion
                                    </h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={fashion} style={maxWith} loading="lazy"
                                             alt="rocketnow-business-fashion"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "30px", width: "190px", marginLeft: "-15px"}}>
                                        <strong>Subscriptions</strong></h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={subscriptions}
                                             style={maxWith} loading="lazy"
                                             alt="rocketnow-business-subscriptions"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "30px", width: "210px", marginLeft: "-15px"}}>
                                        <strong>Entertainment</strong></h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={entartainment}
                                             style={maxWith} loading="lazy"
                                             alt="rocketnow-business-entertainment"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "30px", width: "300px", marginLeft: "-15px"}}>
                                        <strong>Health &amp; Beauty</strong></h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={healthAndBeauty} style={maxWith} loading="lazy"
                                             alt="rocketnow-business-health-and-beauty"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "30px", marginLeft: "-15px"}}><strong>Digital
                                        Goods</strong></h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={digital}
                                             style={maxWith} loading="lazy"
                                             alt="rocketnow-business-digital"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="text-left name"
                                        style={{height: "45px", fontSize: "35px", marginLeft: "-15px"}}>
                                        <strong>Electronics</strong></h3>
                                    <a href="/signup" aria-label={"Join RocketNow business platform"}>
                                        <img src={electronics}
                                             style={maxWith} loading="lazy"
                                             alt="rocketnow-business-electronics"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <img className="rounded-circle img-fluid"
                                         src={chooseAPlan} loading="lazy"
                                         alt="rocketnow-business-path"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <h2 className="display-4">Choose your path</h2>
                                    <p>Whether you're are a small business or an established company we have a plan for
                                        you.<br/>Different plans can help you accomplish different goals:<br/>a) testing
                                        your product-market fit<br/>b) expanding to a new market<br/>c) increasing
                                        digital sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="highlight-blue" style={{backgroundColor: "#1e96ff"}}>
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" style={{fontSize: "48px"}}>
                                Simple fee structure
                            </h2>
                            <p className="text-center" style={{color: "rgb(255,255,255)", fontSize: "35px"}}>
                                0.3€ + 10.4%
                            </p>
                        </div>
                        <div className="buttons"/>
                    </div>
                </div>
                <div className="features-boxed">
                    <h2 className="text-center">Plans</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card card-pricing text-center px-3 mb-4">
                                    <span style={pricingName}>
                                        Starter
                                    </span>
                                    <div className="bg-transparent card-header pt-4 border-0">
                                        <h1 style={blueColor}>€O<span
                                            style={perMonth}>/pm</span></h1>
                                    </div>
                                    <div className="card-body pt-0">
                                        <ul className="list-unstyled mb-4">
                                            <li>1 collaborator</li>
                                            <li>Up to 10 products</li>
                                            <li/><li/><li/><li/><li/>
                                        </ul>
                                        <a className="btn btn-outline-primary btn-block text-capitalize text-white border rounded mb-3"
                                           role="button"
                                           href="/signup"
                                           style={pricingButton}>
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-pricing text-center px-3 mb-4">
                                    <span style={pricingName}>
                                        Growth
                                    </span>
                                    <div className="bg-transparent card-header pt-4 border-0">
                                        <h1 style={blueColor}>€5<span
                                            style={perMonth}>/pm</span></h1>
                                    </div>
                                    <div className="card-body pt-0">
                                        <ul className="list-unstyled mb-4">
                                            <li>Free trial</li>
                                            <li>Up to 5 collaborators</li>
                                            <li>Up to 50 products</li>
                                            <li>Free cancellation</li>
                                        </ul>
                                        <a className="btn btn-outline-primary btn-block text-capitalize text-white border rounded mb-3"
                                           role="button"
                                           href="/signup"
                                           style={pricingButton}>
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-pricing text-center px-3 mb-4">
                                    <span style={pricingName}>
                                        Enterprise
                                    </span>
                                    <div className="bg-transparent card-header pt-4 border-0">
                                        <h1 style={blueColor}>€15<span
                                            style={perMonth}>/pm</span></h1>
                                    </div>
                                    <div className="card-body pt-0">
                                        <ul className="list-unstyled mb-4">
                                            <li>Unlimited collaborators</li>
                                            <li>Unlimited products</li>
                                            <li>Priority Customer support</li>
                                            <li>Free cancellation</li>
                                        </ul>
                                        <a className="btn btn-outline-primary btn-block text-capitalize text-white border rounded mb-3"
                                           role="button"
                                           href="/signup"
                                           style={pricingButton}>
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="rounded-circle img-fluid"
                                         src={businessSupport} loading="lazy"
                                         alt="rocketnow-business-support"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Supporting you</h2>
                                    <p>We're helping you to get the most out of your RocketNows store.<br/>We're there
                                        for you If you need help with setting up your account or you want sales-boosting
                                        tips.<br/>We're also taking care of most communication with your retail
                                        clients so that you can focus on what's truly important -&gt; making your
                                        products better.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Selling on RocketNow</h2>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fas fa-pencil-alt icon" style={blueColor}/>
                                    <h3 className="name">1. Sign up for Free</h3>
                                    <p className="description">
                                        Sign up &nbsp;online for free. &nbsp;All you need is an email address, IBAN and
                                        a registered legal entity.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="far fa-list-alt icon" style={blueColor}/>
                                    <h3 className="name">2.<strong>List your products&nbsp;</strong>&nbsp;</h3>
                                    <p className="description">
                                        Add an image, a title and a description of your product or service. You can add
                                        products in 6 categories.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fas fa-bullhorn icon" style={blueColor}/>
                                    <h3 className="name">3.<strong>Share and advertise</strong>&nbsp;</h3>
                                    <p className="description">
                                        Tell your customers what an awesome product you have just listed. Share it on
                                        social media or create an advertisement.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fas fa-barcode icon" style={blueColor}/>
                                    <h3 className="name">4.&nbsp;<strong>&nbsp;Fulfill customer orders</strong></h3>
                                    <p className="description">
                                        If you sell physical goods you'll see the order details on your dashboard after
                                        the customer has submitted an order.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-bank icon" style={blueColor}/>
                                    <h3 className="name">5.&nbsp;<strong>&nbsp;Get paid&nbsp;</strong></h3>
                                    <p className="description">
                                        Choose between getting paid on a weekly or monthly bases. You can also choose to
                                        receive instore credit as payment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="far fa-compass icon" style={blueColor}/>
                                    <h3 className="name"><strong>6. Improve and Monitor</strong></h3>
                                    <p className="description">
                                        We provide you with the tools to improve your product listing which bring more
                                        value to your customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-subscribe" style={{backgroundColor: "rgb(255,255,255)"}}>
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Join Our Affiliate Program</h2>
                            <p className="text-center">Transform your passion to a fulltime job</p>
                            <div className="row">
                                <div className="col-md-4 col-xl-12"><a
                                    className="btn btn-outline-primary btn-block text-capitalize text-white border rounded-0"
                                    role="button" style={pricingButton} href="/affiliate" aria-label={"Learn more about the RocketNow affiliate network"}>Learn
                                    more</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
};