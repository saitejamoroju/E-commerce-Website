import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Display from '../Components/ProductDisplay/Display';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <Display product={product}/>
      <Descriptionbox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
