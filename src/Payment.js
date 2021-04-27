import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from "./firebase";

function Payment() {

    // eslint-disable-next-line no-unused-vars
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceed] = useState(false)
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        // special stripe secret that allows us to charge the customer
        const getClientSecret = async () => {

            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies sub-units
                url: `/payments/create?total=${getCartTotal(cart) * 100}`                
            });

            setClientSecret(response.data.clientSecret)

        }

        console.log("THE SECRET IS >>>", clientSecret)

        getClientSecret();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])


    const handleSubmit = async (event) => {
        //to do all the fancy stripe stuff

        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        setProcessing(true);

        // eslint-disable-next-line no-unused-vars
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // payment intent = payment "confirmation"

            db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id).set({cart: cart, amount: paymentIntent.amount, created: paymentIntent.created})

            setSucceed(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_CART"
            })

            history.replace('/orders')

        })
    }

    const handleChange = event => {
        // listens for changes in the card element
        // displays any errors as the client types their details
        // eslint-disable-next-line no-restricted-globals
        setDisabled(event.empty);
        // eslint-disable-next-line no-restricted-globals
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">

            <div className="payment_container">

                <h1>
                    Checkout (<Link to='/checkout'>
                        {cart.length} items
                    </Link>)
                </h1>

                {/* delivery address */}
                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>Delivery address</h3>
                    </div>

                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 Votre addresse</p>
                        <p>Votre Ville</p>
                        <p>Votre Pays</p>
                    </div>
                </div>

                {/* reviewing the items */}
                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment_items">
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                             /> 
                            ))}
                    </div>

                </div>

                {/* payment method */}
                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment_details'>
                        {/* stripe technicalities go here */}

                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">

                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                 />

                                <button disabled={processing ||disabled || succeeded }>
                                    <span>{ processing? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment;
