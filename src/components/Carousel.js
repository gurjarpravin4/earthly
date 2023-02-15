import React from "react";

export default function Carousel(){
    const item1 = "https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1899,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg";
    const item2 = "https://video.wixstatic.com/video/11062b_d709906efd694f14a91f3da1774cdbba/480p/mp4/file.mp4";
    const item3 = "https://static.wixstatic.com/media/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg/v1/fill/w_1899,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg"
    
    const carouselStyle = {
        height: "30rem",
        width: "window.innerWidth",
        marginTop: "5.938rem" 
    }

    const head1Style = {
        fontFamily: ['Poppins', 'sans-serif'],
        fontSize: "111px",
        color: "#0B4425",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF",
        textAlign: "left"
    }
    const subHead1Style = {
        fontFamily: ['Playfair Display', 'serif'],
        fontSize: "111px",
        color: "#0B4425",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF",
        textAlign: "left"
    }

    const head2Style = {
        color: "white",
        fontFamily: 'Montserrat',
        fontSize: "57px",
        fontWeight: "700"
    }

    const head3Style = {
        fontFamily: ['Poppins', 'sans-serif'],
        fontSize: "107px",
        color: "#FFF86B",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF",
        textAlign: "left"
    }

    const subHead3Style = {
        fontFamily: ['Playfair Display', 'serif'],
        fontSize: "107px",
        color: "#FFF86B",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF",
        textAlign: "left"
    }

    return(
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={item1} className="d-block w-100" alt="..." style={carouselStyle}/>
                        <div className="carousel-caption d-none d-md-block" style={{textAlign: "left"}}>
                            <h1 style={head1Style}>BECOME</h1>
                            <h1 style={subHead1Style}>Sustainable</h1>
                            <button className="btn btn-lg carousel-button rounded-pill">Start Today</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <video className="d-block w-100" autoPlay loop muted style={carouselStyle}>
                            <source src={item2} type="video/mp4" />
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={head2Style}>Join the Revolution</h1>
                            <h3>Make it Possible</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={item3} className="d-block w-100" alt="..." style={carouselStyle}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={head3Style}>LIVING SUSTAINABLY</h1>
                            <h1 style={subHead3Style}>Shouldn't be Expensive</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}