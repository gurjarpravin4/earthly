import React from 'react';

export default function Glass(){
    const i1URL = "https://static.wixstatic.com/media/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png/v1/fill/w_1000,h_542,al_c,q_90,enc_auto/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png"
    const img2URL = "https://static.wixstatic.com/media/ead566_715f1190768b47d6b438a68d903211ec~mv2.png/v1/fill/w_1000,h_591,al_c,q_90,enc_auto/ead566_715f1190768b47d6b438a68d903211ec~mv2.png"

    const headStyle = {
        position: "absolute", 
        top: "50px", 
        left: "25%",
        fontFamily: "Hanken Grotesk",
        fontWeight: "400",
        lineHeight: "54px"
    }
    const largeCupStyle = {
        position: "absolute",
        top: "100px",
        left: "43%",
        width: "55%",
        height: "55%"
    }
    const imgTitleStyle = {
        fontFamily: "Hanken Grotesk",
        fontWeight: "700",
        lineHeight: "54px"
    }
    const imgDescStyle = {
        fontFamily: "Montserrat",
        size: "15px",
        fontWeight: "700"
    }
    const div1Style = {
        position: "absolute",
        top: "200px",
        left: "4.4%",
        width: "450px",
        height: "200px"
    }
    const orangeCupStyle = {
        position: "absolute",
        top: "520px",
        left: "1%",
        width: "35%",
        height: "35%"
    }
    const div2Style = {
        position: "absolute",
        top: "670px",
        left: "40%",
        width: "350px",
        height: "150px"
    }
    return(
        <>
            <div id="parent-container" style={{position: "relative"}}>
                <div id="video-container" style={{zIndex: "-1"}}>
                    <video autoPlay muted loop style={{width: "100%", height: "100%"}}>
                        <source id='mp4' src = "https://video.wixstatic.com/video/11062b_864e63fd5a644da3bdfcf6e164da1efb/1080p/mp4/file.mp4" type='video/mp4'/>
                        <p>Video not supported</p>
                    </video>
                </div>
                <h1 className= "text-center" style={headStyle}>EARTHLY IS PLANT-BASED AND MADE FROM:</h1>
                <img src={i1URL} alt="Cups large" style={largeCupStyle}/>
                <div className='container-fluid' style={div1Style}>
                    <h1 style={imgTitleStyle}>BAMBOO AND WHEAT FIBRE</h1>
                    <p style={imgDescStyle}>Sourced from local farmers, plant residue from Wheat, Barley, and Bamboo is molded into durable cups using our proprietary technology.</p>
                </div>
                <img src={img2URL} alt="Orange Cup" style={orangeCupStyle}/>
                <div className="container-fluid" style={div2Style}>
                <h1 style={imgTitleStyle}>ORANGE FIBRE</h1>
                <p style={imgDescStyle}>Made from Orange peels and other organic matter left behind after Orange is harvested.</p>
                </div>
            </div>
        </>
    )
}