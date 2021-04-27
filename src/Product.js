import React from 'react';
import "./Product.scss";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating,}) {

    // eslint-disable-next-line no-unused-vars
    const [{cart} , dispatch] = useStateValue();
    
    const addToCart = () => {
        //dispatch item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

    return (
        
        <div className="product">

            {/* product description: name, price, rating (and any other necessary info) */}
            <div className="product_info">

                <p>{title}</p>

                <p className="product_price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>

                <div className="product_rating">
                    {/*basically enables you to auto-adjust the star rating  */}
                    {Array(rating).fill().map((_,i) => (<p>★</p>))}
                </div>

            </div>

            {/* product image */}
            <img className="product_img" src={image} alt="product-img"/>

            {/* purchase button */}
            <button className="product_button" onClick={addToCart}>Add to Cart</button>

        </div>
    );

}

export default Product;