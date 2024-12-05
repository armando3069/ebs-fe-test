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
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
        </div>

        <div className="right" >
            {/* <p className='auth'>LOGIN/SIGNUP</p> */}
              <Link to="/cart">
            <div className="shopContainer">
              <HiOutlineShoppingBag color='black' fontSize={32} />
              <div className="quantityShop">{cartQuantity}</div>
            </div>
              </Link>;

        </div>
    </div>

    </div>
  )
}

export default Navbar