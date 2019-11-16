import React from 'react';
import Footer from "./common/footer";
import Navbar from "./common/navbar";
import AcceptsCookies from "../../components/cookieConsent";
import CustomerChat from "../../components/customerChat";


export default React.memo(() => {
            return (
                <React.Fragment>
                        <Navbar/>
                        <br/><br/><br/><br/><br/><br/>
                        <AcceptsCookies/>
                        <CustomerChat/>
                        <p>Affiliate program in not yet ready.</p>
                        <br/>
                        <p>Please come back soon :)</p>
                        <br/><br/><br/><br/><br/><br/>
                        <Footer/>
                </React.Fragment>
            );
    }
);