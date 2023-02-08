import React from "react";

export default function Carousel(){
    const item1 = "https://static.wixstatic.com/media/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg/v1/fill/w_1899,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ead566_f3c3e4c17f2b4801a87ceffc781ad87e~mv2.jpg";
    const item2 = "https://video.wixstatic.com/video/11062b_d709906efd694f14a91f3da1774cdbba/480p/mp4/file.mp4";
    const item3 = "https://static.wixstatic.com/media/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg/v1/fill/w_1899,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cbc1493bfd2c427aab945fcb2672f8ff~mv2.jpg"
    
    const carouselStyle = {
        height: "25rem",
        width: "window.innerWidth",
    }

    const head1Style = {
        fontFamily: ['Poppins', 'sans-serif'],
        fontSize: "111px",
        color: "#0B4425",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF"
    }
    const head2Style = {
        fontFamily: ['Playfair Display', 'serif'],
        fontSize: "111px",
        color: "#0B4425",
        textShadow: "1px 1px 0 #FFF, -1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF"
    }

    return(
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={item1} className="d-block w-100" alt="..." style={carouselStyle}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={head1Style}>Become</h1>
                            <h1 style={head2Style}>Sustainable</h1>
                            <button className="btn btn-lg carousel-button rounded-pill">Start Today</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <video className="d-block w-100" autoPlay loop muted style={carouselStyle}>
                            <source src={item2} type="video/mp4" />
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={item3} className="d-block w-100" alt="..." style={carouselStyle}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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
    )
}