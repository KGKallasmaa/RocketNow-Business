import React from "react";
import {Helmet} from "react-helmet";
import CookieConsent from "react-cookie-consent";

export default React.memo(() => {
        return (
            <React.Fragment>
                <Helmet>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
                </Helmet>
                <CookieConsent
                    location="bottom"
                    buttonText="Got it!"
                    cookieName="rocketNowBusinessUserConsentCookie"
                    style={{background: "#2B373B"}}
                    buttonStyle={{color: "#4e503b", fontSize: "13px"}}
                    expires={150}
                >
                    By using RocketNow’s services you agree to our <a aria-label={"RocketNows privacy policy"} href={"http://rocketnow.eu/privacy"}>Cookies Policy</a>
                </CookieConsent>
            </React.Fragment>
        );
    }
);