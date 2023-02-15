import React from "react";

export default function FixedVideo(){
    return(
        <>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src="https://video.wixstatic.com/video/11062b_9c77d10fbe6d4bdfbffe3f7ff1cabd03/720p/mp4/file.mp4" type="video/mp4"/>
                </video>
                <div className="content">
                    <h1>Ireland Discards more than 200 Million coffee cups a year</h1>
                    <h3 style={{paddingRight: "300px", marginTop: "50px"}}>Join us in our mission towards reducing our Carbon Footprint and making Ireland a Zero-waste Circular Economy</h3>
                </div>
            </div>

        </>
    )
}