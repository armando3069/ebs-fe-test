import React from 'react'
import logo from '../../assets/img/logo.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useShoppingCart } from '../../context/shopContext';
import { Link } from 'react-router-dom';

import './index.css'

const Navbar = () => {
  const{cartQuantity} = useShoppingCart();
  return (
    <div className='viewportNavbar'>
    <div className="containerNav">

        <div className="left">ebs-fe-test</div>

        <div className="middle">
          <img src={logo} alt="" />
        </div>

        <div className="right" >
            <p className='auth'>LOGIN/SIGNUP</p>


            <div className="shopContainer">

              <HiOutlineShoppingBag fontSize={32} />
              <div className="quantityShop">{cartQuantity}</div>

            </div>

        </div>
    </div>

    </div>
  )
}

export default Navbar