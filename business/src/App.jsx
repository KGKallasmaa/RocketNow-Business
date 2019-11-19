import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from "./pages/public/home";

import Warehouse from "./pages/core/warehouse";
import Orders from "./pages/core/orders";
import NewProduct from "./pages/core/newGood/newGood";
import Finance from "./pages/core/finance";
import Settings from "./pages/core/settings";


import Signup from "./pages/public/signup";
import Login from "./pages/public/login";

import Affiliate from "./pages/public/affiliate/affiliate";
import JoinAffiliate from "./pages/public/affiliate/joinAffiliate";


import PageNotFound from "./pages/pageNotFound.jsx";
import {isBusinessUserLoggedIn} from "./components/authentication";


const Logout = () => {
    localStorage.removeItem("jwtToken_business");
    localStorage.removeItem("jwtToken_expires_business");
    localStorage.removeItem("businessDisplayName");
    localStorage.removeItem("businessLegalName");
    localStorage.removeItem("logoURL");
    return (
        <Redirect to=""/>
    );
};

const PrivateBusinessRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isBusinessUserLoggedIn() === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
);

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={Login}/>
                <PrivateBusinessRoute exact path="/new/product" component={NewProduct}/>
                <PrivateBusinessRoute exact path="/finance" component={Finance}/>
                <PrivateBusinessRoute exact path="/settings" component={Settings}/>
                <PrivateBusinessRoute exact path="/orders" component={Orders}/>
                <PrivateBusinessRoute exact path="/warehouse" component={Warehouse}/>
                <Route exact path="/affiliate" component={Affiliate}/>
                <Route exact path="/join/affiliate" component={JoinAffiliate}/>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
    );
};