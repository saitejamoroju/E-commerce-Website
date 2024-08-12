import React, { useContext } from 'react';
import start_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import './display.css';
import { ShopContext } from '../../Context/ShopContext';

const Display = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="oldprice">${product.old_price}</div>
                    <div className="newprice">${product.new_price}</div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Rem earum, dolor,
                    distinctio quibusdam adipisci placeat 
                    voluptatibus voluptate maiores at repellat 
                    est fugit corrupti molestias fuga!
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className='btn'>Add to Cart</button>
                <p className='product-display-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
                <p className='product-display-right-category'><span>Tags: </span>Modern, latest</p>
            </div>
        </div>
    );
}

export default Display;
