import React from 'react';
import "./Checkout.scss";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    // eslint-disable-next-line no-unused-vars
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">
                
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg" alt="amazon-checkout-ad-banner" />
                
                <div>
                    <h3 className="checkout_salutation">Hey there {user?.email}!</h3>
                    <h2 className="checkout_title">Your Shopping Cart</h2>

                    {/* cart item */}
                    {cart.map(item =>
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    )}


                    {/* cart item */}


                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout;
