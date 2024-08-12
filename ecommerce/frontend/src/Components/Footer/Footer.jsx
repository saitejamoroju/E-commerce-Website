import React from 'react'
import './footer.css'
import insta from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import wassup from '../Assets/whatsapp_icon.png'

import foot_logo from '../Assets/logo_big.png'
const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-logo">
        <img src={foot_logo} alt="" />
        <p>SHOP HERE</p>
    </div>
    <ul className="footer-links">
        <li>company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-socials">
        <div className="footer-icons-contianer">
            <img src={insta} alt="" />
        </div>
        <div className="footer-icons-contianer">
            <img src={pintrest} alt="" />
        </div>
        <div className="footer-icons-contianer">
            <img src={wassup} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>&copy;Copyright @2023 - All Rights Reserved</p>
    </div>
   </div>
  )
}

export default Footer