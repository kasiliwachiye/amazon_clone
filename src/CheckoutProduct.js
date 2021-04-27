import React from 'react';
import "./CheckoutProduct.scss";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    // eslint-disable-next-line no-unused-vars
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    } 

    return (
        <div className="checkoutProduct">

            <img className="checkoutProduct_image" src={image} alt="checkout_product" />

            <div className="checkoutProduct_info">

                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>

                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((_,i) => (<p>★</p>))}
                </div>

                {!hideButton && (<button className="checkoutProduct_button" onClick={removeFromCart}>Remove from Cart</button>)}

            </div>
        </div>
    )
}

export default CheckoutProduct;
