import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";
import all_product from "../Components/Assets/all_product";


const ShopCategory = (prop) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img  className="shopcategory-img" src={prop.banner} alt="" />
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shop-sort">
          sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shop-products">
        {all_product.map((item, i) => {
          if (prop.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shop-load">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
