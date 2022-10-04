import React from "react";
import { Link } from "react-router-dom";
import LandingProductsItem from "./LandingProductsItem/LandingProductsItem";

const LandingProducts = () => {
    return (
        <div className="landingProductsContainer">
            <div id="catalogueItemIntro">
                <h5>Una selección de nuestros HouseGoods</h5>
                <p>
                    La combinación de forma, función y cosas que nos gustan .
                    Nuestros HouseGoods fueron diseñados para la gente que ama
                    las cosas que son tanto hermosas como útiles. <br />
                    <Link to={"/products"}>
                        <button>Ver Productos</button>
                    </Link>
                </p>
            </div>
            <LandingProductsItem image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/Untitled-16_720x.jpg?v=1654211967" />
            <LandingProductsItem image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/081022_Houseplant44916_720x.jpg?v=1663110954" />
            <LandingProductsItem image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/BTLgreenlifetstyle_720x.png?v=1663102403" />
            <LandingProductsItem image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/recordplayerV2lifestyle_1080x.png?v=1661193855" />
        </div>
    );
};

export default LandingProducts;
