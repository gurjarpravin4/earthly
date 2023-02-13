import React from "react";
import Product from "./Product";
import ProductInfo from "./ProductInfo";

function createProduct(productItem){
    return(
        <div className="col product">
            <Product
                imgURL = {productItem.imgLink}
                imgAlt = {productItem.altText}
                name = {productItem.prodName}
                price = {productItem.prodPrice}
            />
        </div>
    )
}

export default function ProductRow(props){
    return(
        <>
            <div className="container text-center product-row">
                <div className="row">
                    {ProductInfo.map(createProduct)}
                </div>
            </div>
        </>
    )
}