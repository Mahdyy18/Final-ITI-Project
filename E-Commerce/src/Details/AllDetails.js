import React from 'react';
import { useParams } from 'react-router-dom';
import Top from '../Top';
import { CartProvider } from 'react-use-cart';
import ProductDetails from './ProductDetails';

function AllDetails() {
  const { id } = useParams(); 

  return (
    <CartProvider>
      <Top />
      <div className="pt-5 pb-3 bg-black text-center"></div>
      
     
      <ProductDetails productId={id} />
    </CartProvider>
  );
}

export default AllDetails;
