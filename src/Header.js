import React from 'react';
import "./Header.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



function Header() {


const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
        
        <div className='header_box'>
        <Link to ="/">
        <img
            className='header_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1024px-Eo_circle_light-blue_white_letter-s.svg.png'
        
        
        
        />
        </Link>
        <h4 className='header_darius'>Powered by Darius</h4>
        </div>

        <div className="header_search">
            <input
            className='header_searchInput' 
            type="text"/>
            
            
            <div className='header_searchIcon'>

            </div>

            
        
            
        </div>



        <div className='header_nav'>
            <Link to="/signin">
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Hello Guest
                </span>
                <span className='header_optionLineTwo'>
                    Sign In
                </span>
            </div>
            </Link>

            <div className='header_option'>
            <span className='header_optionLineOne'>
                    Returns
                </span>
                <span className='header_optionLineTwo'>
                    & Orders
                </span>
            </div>

            <div className='header_option'>
            <span className='header_optionLineOne'>
                    Your
                </span>
                <span className='header_optionLineTwo'>
                    Swipe
                </span>
            </div>

            <div className='header_optionBasket'>
            <Link to ="/checkout">
            <AiOutlineShoppingCart className='header_basket'/>
            
            <span className='header_basketCount'>
                {basket.length}
            </span>
            </Link>

            </div>

        </div>

    </div>
  )
}

export default Header