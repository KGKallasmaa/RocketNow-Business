import React from 'react';


export const Navbar = React.memo((props) => {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container">
                    <a className="navbar-brand" href="/" aria-label={"Homepage"}>
                        RocketNow
                    </a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarResponsive"
                            aria-label={"View navigation options"}>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="/signup">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="/login">
                                    Log In
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
);