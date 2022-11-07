import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Start Boostrap</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    <a class="nav-link" href="#">About</a>
                                    <a class="nav-link" href="#">Service</a>
                                    <a class="nav-link" href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );

    }
}

export default Header;