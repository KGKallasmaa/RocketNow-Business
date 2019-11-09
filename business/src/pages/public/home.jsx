import React from 'react';
import {isBusinessUserLoggedIn} from "../../components/authentication";
import BusinessHome from "../core/home";



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
                Not logged in homePage
            </React.Fragment>
        );
    }
};