import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';





it('App component renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//core
import Finance from './pages/core/finance';
import Dashboard from './pages/core/home';
import Orders from './pages/core/orders';
import Settings from './pages/core/settings';
import Warehouse from './pages/core/warehouse';


it('Finance page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Finance />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Dashboard page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Orders page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Orders />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Settings page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Settings />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Warehouse page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Warehouse />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import NewGood from './pages/core/newGood/newGood';
import NewPhysicalGood from './pages/core/newGood/newPhysicalGood';

// new Goods
it('NewGood page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewGood />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('NewPhysicalGood component renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewPhysicalGood />, div);
    ReactDOM.unmountComponentAtNode(div);
});

//Common

import Footer from './pages/core/common/footer';
import Menu from './pages/core/common/menu';
import Navbar from './pages/core/common/navbar';

it('Core functionality footer component renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Core functionality menu component renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Core functionality navbar component renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});


//Other

import Home from './pages/public/home';
import Login from './pages/public/login';
import Signup from './pages/public/signup';
import PageNotFound from './pages/pageNotFound';

//todo: affiliate page

//Todo: update this page if you update the homepage
it('Homepage renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Login page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Signup page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signup />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Pagenotfound page renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageNotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
});