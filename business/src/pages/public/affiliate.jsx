import React from 'react';
import Footer from "./common/footer";
import Navbar from "./common/navbar";



export default React.memo(() => {
        return (
            <React.Fragment>
                <Navbar/>
                <p>Affiliate program in not yet ready.</p>
                <br/>
                <p>Please come back soon :)</p>
                <Footer/>
            </React.Fragment>

        );
    }
);