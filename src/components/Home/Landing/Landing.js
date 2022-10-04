import React from "react";
import { Link } from "react-router-dom";
import CatalogueItem from "./CatalogueItem/CatalogueItem";

const Landing = () => {
    return (
        <>
            <div className="portada">
                <img src="https://cdn.shopify.com/s/files/1/0588/0070/1647/files/ashtray_set_by_seth_in_rust_hero_1944x.jpg?v=1663256442" />
                <div>
                    <h2>HECHO A MANO</h2>
                    <h3>Arte calidad practicidad</h3>
                </div>
            </div>

            <div className="catalogue">
                <div className="catalogueItem" id="catalogueItemIntro">
                    <h5>Lo nuevo:</h5>
                    <p>
                        Cada pieza se cocina dos veces, primero para
                        resistencia, segundo para el acabado glaseado. El
                        proceso completo tarda alrededor de 4 semanas, lo cuál
                        no está mal cuando estás haciendo una pieza de arte que
                        está pensada para ser usada todos los días.
                    </p>
                </div>
                <CatalogueItem
                    name="Cenicero 2.0"
                    price="8600$"
                    image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/ashtray2.0bysethwhitetable_720x.png?v=1660246412"
                />
                <CatalogueItem
                    name="Plantín Macetero"
                    price="17499$"
                    image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/planterbysethinbathroom2_720x.png?v=1660169355"
                />
                <CatalogueItem
                    name="Vasija Oceánica"
                    price="10000$"
                    image="https://cdn.shopify.com/s/files/1/0588/0070/1647/products/Vase-retouched_d441ec46-e23e-4854-af15-27b35528f4ef_720x.jpg?v=1660855141"
                />
            </div>
        </>
    );
};

export default Landing;
