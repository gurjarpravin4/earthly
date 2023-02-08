import React from 'react';
export default function Navbar(){
    const navStyle = {
        color: "white",
        fontFamily: 'Montserrat'
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_99,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png" alt="Logo"  className="d-inline-block align-text-top mx-6"></img>
                    </a>
                    <a className='navbar-brand' href="/">
                        <h3 style={{color: "white", fontWeight: 700}}>earthly</h3>
                        <p style={navStyle}>Sustainable products at affordable prices</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link active" aria-current="page" href="/" style={navStyle}>Home</a>
                            <a className="nav-link" href="/" style={navStyle}>Shop</a>
                            <button className=' nav-link btn btn-outline-light rounded-pill nav-button'>Get in touch</button>
                            <a className="nav-link" href="/" style={navStyle}>Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}