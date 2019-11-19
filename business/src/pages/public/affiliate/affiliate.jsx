import React from 'react';
import Footer from "../common/footer";
import {Navbar} from "../common/navbar";
import {Helmet} from "react-helmet";

import "../assets/css/affiliate.min.css";
import AcceptsCookies from "../../../components/cookieConsent";

import doWhatYouLove from "../assets/img/do what you love.webp";
import getStartedToday from "../assets/img/get started today.webp";
import LazyLoad from "react-lazyload";

const fontSize = {fontSize: "20px"};
const blueColor = {color: "#1e96ff"};
const whiteColor = {color: "#ffffff"};
const whiteBackground = {backgroundColor: "rgb(255,255,255)"};
const readyToTakeActionButtonColors = {color: "rgb(49,52,55)"};
const joinTheProgramButton = {backgroundColor: "#1e96ff", paddingRight: "10%", paddingLeft: "10%"};

export default React.memo(() => {
        return (
            <React.Fragment>
                <Helmet>
                    <title>RocketNow Affiliate Program</title>
                    <link rel="canonial" href="http://business.rocketnow.eu/affiliate"/>
                    <meta name="twitter:description"
                          content="Join the RocketNows Affiliate Program and start earning today. "/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="og:type" content="website"/>
                    <meta name="description" content="Join the RocketNows Affiliate Program and start earning today. "/>
                    <meta property="og:image" content={process.env.REACT_APP_PUBLIC_URL + doWhatYouLove}/>
                    <meta name="twitter:image" content={process.env.REACT_APP_PUBLIC_URL + doWhatYouLove}/>
                    <meta name="twitter:title" content="Affiliate Program- Your Passion, Your Income"/>
                </Helmet>
                <Navbar/>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container">
                            <h1 className="text-left masthead-heading mb-0" style={whiteColor}>Affiliate program</h1>
                            <h2 className="text-left masthead-subheading mb-0" style={whiteColor}>Your passion is your income</h2>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"/>
                    <div className="bg-circle-2 bg-circle"/>
                    <div className="bg-circle-3 bg-circle"/>
                    <div className="bg-circle-4 bg-circle"/>
                </header>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <LazyLoad>
                                        <img className="rounded-circle img-fluid"
                                             alt={"Women painting on the wall"}
                                             src={doWhatYouLove}/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Do what you love</h2>
                                    <p style={fontSize}>Whether you like to review books or engage your audience in
                                        a blog post you will benefit from the RocketNow affiliate program.</p>
                                    <p style={fontSize}>The program allows you to turn your effort and creativity
                                        into tangible income.&nbsp;</p>
                                    <p style={fontSize}>It allows you do to keep your current project free and
                                        allows you do focus on making your content more regular and more professional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Benefits of the Affiliate Program</h2>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-12 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="far fa-calendar-alt icon" style={blueColor}/>
                                    <h3 className="name">Set your own schedule</h3>
                                    <p className="description">You’re the boss. Share any product with your audience, from
                                        book-clubs to influencer networks, when you feel like it. Fit it around your life,
                                        not the other way.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fas fa-euro-sign icon" style={blueColor}/>
                                    <h3 className="name"><strong>Clear earnings, instant&nbsp;deposits</strong></h3>
                                    <p className="description">See how much you earned after each affiliate purchase and how
                                        earnings were calculated. Get weekly deposits or receive free credit instantly
                                        anytime you want.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fa fa-list-alt icon" style={blueColor}/>
                                    <h3 className="name">Few limitations</h3>
                                    <p className="description">You can share any product eligible for the affiliate network
                                        with
                                        your audience. Whether you review books or give fashion advice we've got you
                                        covered.</p>
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
                                    <LazyLoad>
                                        <img className="rounded-circle img-fluid"
                                             alt={"Women holding a black Nexus 5 phone"}
                                             src={getStartedToday}/>
                                    </LazyLoad>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <h2 className="display-4">Get started today</h2>
                                    <p style={fontSize}>On the backend, the affiliate program is a complex machine
                                        that keeps the checks and balances in order.</p>
                                    <p style={fontSize}>The only step between you and the power that the network
                                        holds is singing up. What are you waiting for?&nbsp;</p>
                                    <p style={fontSize}>What are you waiting for?&nbsp;&nbsp;Signing up is free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">How does it work?</h2>
                        </div>
                        <div className="row justify-content-center features">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="far fa-edit icon" style={blueColor}/>
                                    <h3 className="name">1. Join the network</h3>
                                    <p className="description">Sign up for Free. You can use your existing RocketNow account
                                        or
                                        create a new one with email, Google or Facebook.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="far fa-list-alt icon" style={blueColor}/>
                                    <h3 className="name">2. Agree with the terms</h3>
                                    <p className="description">There are some rules that everybody on the platform must
                                        follow.
                                        They assure a healthy community for all.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fas fa-boxes icon" style={blueColor}/>
                                    <h3 className="name"><strong>3. Pick a product</strong></h3>
                                    <p className="description">Pick a product to which you want to become an affiliate.
                                        RocketNow has numerous products to choose from.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fas fa-share-alt icon" style={blueColor}/>
                                    <h3 className="name">4. Share your link</h3>
                                    <p className="description">Include the affiliate link in your blog post or add it to
                                        your
                                        YouTube video description or share it creatively.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="fas fa-university icon" style={blueColor}/>
                                    <h3 className="name"><strong>5. Choose the payment method</strong></h3>
                                    <p className="description">To receive funds from RocketNow you need to choose a
                                        payout method. It can either be in store credit or bank payment.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <i className="far fa-heart icon" style={blueColor}/>
                                    <h3 className="name">6. Enjoy</h3>
                                    <p className="description">After the customers have bought a product using your
                                        affiliate
                                        we'll increment your affiliate account balance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight-blue" style={whiteBackground}>
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" style={readyToTakeActionButtonColors}>Ready to take action?</h2>
                        </div>
                        <div className="buttons">
                            <a className="btn btn-primary btn-block btn-sm" role="button"
                               href="/join/affiliate"
                               style={joinTheProgramButton}>
                                Join the Program
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
                <Helmet>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
                </Helmet>
                <AcceptsCookies/>
            </React.Fragment>
        );
    }
);