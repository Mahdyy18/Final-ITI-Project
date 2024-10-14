import React from 'react'

function Trending() {
  return (
    <div>
      <section className="whats-trending">
      <div className="container expanded">
          <div className="row">
              <div className="col-lg-6 align-self-center">
                  <div className="section-heading">
                      <h2>Check Out Whats Trending In<br/><em>Our Interior Work</em>.</h2>
                  </div>
                  <div className="left-content">
                      <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit, sed do eismuod larehai med at vero eos et suscipit neque rerum molestias accusamus et iusto odio dignissimos ducimus qui blanditis.</p>
                      <div className="primary-button">
                          <a href="#">Discover More</a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="right-image">
                      <div className="thumb">
                          <div className="hover-effect">
                              <div className="inner-content">
                                  <h4><a href="#">Modernized Interior</a></h4>
                                  <span>Guest Room Decoration</span>
                              </div>
                          </div>
                          <img src="assets/images/whats-trending-item-image.jpg" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    </div>
  )
}

export default Trending
