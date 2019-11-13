import React from "react";
import AcceptsCookies from "../../components/legal/cookieConsent";
import CustomerChat from "../../components/customerChat/customerChat";



export default class Finance extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AcceptsCookies/>
                <CustomerChat/>
                <h1>Finance page</h1>
                <p>not yet completed</p>
            </React.Fragment>

        );
    }
}
