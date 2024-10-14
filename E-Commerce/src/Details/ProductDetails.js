import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import GalleryDetails from '../Gallery/GalleryData'; 



const ProductDetails = () => {
    const { id } = useParams();
    const GalleryData = GalleryDetails.find(element => element.id === parseInt(id));

    const imageStyle = {
        // width: "250px",
        height: "400px",
        padding: "3px",
    };

    return (
        <section className="py-3">
            <div className="container">
                <div className="row productDetails ">
                    <div className="col-md-4">
                    <img className="card-img-top mb-5 mb-md-0" style={imageStyle} src={GalleryData.image} alt={GalleryData.title} />
                    </div>
                    <div className="col-md-8 p-2">
                        <h1>{GalleryData.title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text">{`Price: ${GalleryData.price}$`}</span>
                        </div>
                        <p className="lead mb-5" style={{ color: "black" }}>
                            {GalleryData.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
