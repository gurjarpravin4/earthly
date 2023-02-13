import React from "react";

export default function Product(props){
    const nameStyle = {
        marginTop: "16px",
        marginBottom: "0px"
    }
    const priceStyle = {
        marginBottom: "10px"
    }
    const imgStyle = {
        borderRadius: "25px"
    }
    return(
        <>
            <div className="product">
                <img 
                    style={imgStyle}
                    src = {props.imgURL} 
                    alt = {props.imgAlt}
                    width = "100%" 
                    height= "100%"
                />
                <p style={nameStyle}>{props.name}</p>
                <p style={priceStyle}>{props.price}</p>
            </div>
        </>
    )
}