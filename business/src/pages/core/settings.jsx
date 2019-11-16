import React from "react";
import AcceptsCookies from "../../components/cookieConsent";
import CustomerChat from "../../components/customerChat";



export default class Settings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AcceptsCookies/>
                <CustomerChat/>
                <h1>Settings page</h1>
                <p>not yet completed</p>
            </React.Fragment>

        );
    }
}
