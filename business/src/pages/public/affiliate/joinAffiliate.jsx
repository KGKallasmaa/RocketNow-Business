import React from 'react';
import Footer from "../common/footer";
import {Navbar} from "../common/navbar";
import {Helmet} from "react-helmet";

import AcceptsCookies from "../../../components/cookieConsent";
import doWhatYouLove from "../assets/img/do what you love.webp";

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
                <br/>
                <br/>
                <br/>
                The affiliate program is not yet ready. Please come back soon :)
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
                <AcceptsCookies/>
            </React.Fragment>
        );
    }
);