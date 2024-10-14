import React from 'react';
import { Link } from 'react-router-dom';

function GalleryPage({ GalleryDetails }) {
  const galleryItems = [
    {
      id: 1,
      banner: 'Circle Mirror Room',
      title: 'Minimal Design Interior',
      imgSrc: 'assets/images/trending-item-01.jpg',
    },
    {
      id: 2,
      banner: 'Exterior Design',
      title: 'Minimal Design Exterior',
      imgSrc: 'assets/images/pexels5.jpg',
    },
    {
      id: 3,
      banner: 'Bedroom Design',
      title: 'Bedroom Design Interior',
      imgSrc: 'assets/images/trending-item-02.jpg',
    },
    {
      id: 4,
      banner: 'Little Bungalow',
      title: 'Minimal Bungalow Interior',
      imgSrc: 'assets/images/trending-item-04.jpg',
    },
    {
      id: 5,
      banner: 'Tea Table Design',
      title: 'Tea Table Interior',
      imgSrc: 'assets/images/trending-item-05.jpg',
    },
    {
      id: 6,
      banner: 'Interior Bed Design',
      title: 'Minimal Bedroom Interior',
      imgSrc: 'assets/images/trending-item-06.jpg',
    },
    {
      id: 7,
      banner: 'White Theme Interior',
      title: 'White Theme Bedroom',
      imgSrc: 'assets/images/trending-item-07.jpg',
    },
    {
      id: 8,
      banner: 'Specific Interior Design',
      title: 'Specific Design Interior',
      imgSrc: 'assets/images/trending-item-08.jpg',
    },
    {
      id: 9,
      banner: 'Another Interior Design',
      title: 'Minimal Design Interior',
      imgSrc: 'assets/images/pexels4.jpg',
    },
    {
      id: 10,
      banner: 'Modern Chair',
      title: 'Modern Chair Interior',
      imgSrc: 'assets/images/pexels7.jpg',
    },
    {
      id: 11,
      banner: 'Exterior Decor',
      title: 'Minimal Exterior Decor',
      imgSrc: 'assets/images/pexels8.jpg',
    },

    {
        id: 12,
        banner: 'Glass Table Design',
        title: 'Glass Table Design',
        imgSrc: 'assets/images/trending-item-05.jpg',
      },
  ];

  return (
    <div>
      <section className="trending-page">
        <div className="container expanded">
          <div className="col-lg-12">
            <div className="row grid">
              <div className="grid-sizer"></div>
              {galleryItems.map((item) => (
                <div className="grid-item" key={item.id}>
                  <div className="trending-item">
                    <div className="thumb">
                      <span className="banner">{item.banner}</span>
                      <div className="hover-effect">
                        <div className="inner-content">
                          <Link to={`/Details/${item.id}`}>
                            <h4>{item.title}<br/> See More</h4>
                          </Link>
                          <Link className="icon" to={`/Details/${item.id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              className="bi bi-arrow-right-short"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
