import React from 'react';
import "./Subtotal.scss";
// this is a react library that we imported
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from './reducer';
//react-router-dom?
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} items): <strong>{value}</strong> </p>
                        <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                    decimalScale={2} //number of decimal points
                    value={getCartTotal(cart)} //where the amount goes
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"€"}
             />

             <button onClick={e => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
