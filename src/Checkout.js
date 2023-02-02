import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout(props) {


    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                
                
                <div>
                    <h2 className='checkout_title'>Your Swipes</h2>
                   {basket.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title ={item.title}
                        image ={item.image}
                        price ={item.price}
                        rating ={item.rating}
                        
                    
                    />
                   ))}
                </div>
            </div>

            <div className='checkout_right'>
                <h2>Your subtotal</h2>
                <Subtotal/>
                

            </div>
            
        </div>
    );
}

export default Checkout;