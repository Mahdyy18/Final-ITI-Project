import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Button, Col, Container, Row } from "reactstrap";
import DataApi from './DataApi';

import Shuffle from "./Shuffle";
import Top from "../Top";
import Footer from "../Footer";

import { Link } from "react-router-dom";
import ShopBanner from "./ShopBanner";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Page({ data }) {
  const { addItem } = useCart();

  return (
    <div>
        <div className="properties section">

        <Container>
        <Row>
          {data.map((item) => (
             <div className="col-lg-4 col-md-3 shadow-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              
             <div className="item">
               <Link to="#"><img src={item.image} alt=""/></Link>
               <span className="category">{item.title}</span>
               <h6>${item.price}</h6>
               <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
               <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className="main-button m-auto text-center">
               <button
                    className="mt-1 mx-auto btn btn-dark btn-lg"
                    onClick={() => addItem(item)}
                  >
                    <svg
                     
                      viewBox="0 0 576 512"
                      width="16"
                      height="16"
                      fill="currentColor" 
                      className="mx-2"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    Add to cart
                  </button>
               </div>
             </div>
           </div>
          ))}
        </Row>
      </Container>

        </div>
     
    </div>
  );
}

function AllShop() {
  const [data, setData] = useState(DataApi);
  const [originalData, setOriginalData] = useState(DataApi);

  const handleShuffle = () => {
    const shuffledData = shuffleArray([...data]);
    setData(shuffledData);
  };

  const handleShowAll = () => {
    setData(originalData);
  };

  return (
    <CartProvider>
      
      <Top/>
      <div classNameName="pt-3"></div>
      <ShopBanner/>
      <Shuffle shuffle={handleShuffle} onShowAll={handleShowAll} />
      <Page data={data} />
      <Footer/>
    </CartProvider>
  );
}

export default AllShop;
