import React from 'react';


export default React.memo(() => {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        RocketNow
                    </a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarResponsive">
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