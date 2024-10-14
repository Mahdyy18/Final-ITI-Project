import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>

<div className="main-banner change-name">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="header-text">
                      <h6>We Provide Everything</h6>
                      <h2><em>Interior</em> Designer</h2>
                      <div className="white-button">
                          <Link to="/Explore">Discover More</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      
    </div>
  )
}

export default Banner
