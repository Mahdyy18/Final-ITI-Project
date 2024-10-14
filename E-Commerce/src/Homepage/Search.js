import React from 'react'

function Search() {
  return (
    <div>
      <div className="search-form">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <form id="search-form" name="gs" method="submit" role="search" action="#">
                      <div className="row">
                          <div className="col-lg-3">
                              <fieldset>
                                  <label for="searchTitle" className="form-label">Search Work by Title</label>
                                  <input type="text" name="searchTitle" className="searchText" placeholder="Type any work title..." autocomplete="on" required/>
                              </fieldset>
                          </div>
                          <div className="col-lg-3">
                              <fieldset>
                                  <label for="chooseCategory" className="form-label">Choose Category</label>
                                  <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory">
                                      <option selected>Choose category</option>
                                      <option type="checkbox" name="option1" value="Interior Design">Interior Design</option>
                                      <option value="Exterior Design">Exterior Design</option>
                                      <option value="New Ideas">New Ideas</option>
                                      <option value="Trendy Design">Trendy Design</option>
                                  </select>
                              </fieldset>
                          </div>
                          <div className="col-lg-3">
                              <fieldset>
                                  <label for="chooseprice" className="form-label">Price Range</label>
                                  <select name="Price" className="form-select" aria-label="Default select example" id="chooseCategory">
                                      <option selected>Choose price</option>
                                      <option value="$100 - $250">$100 - $250</option>
                                      <option value="$250 - $500">$250 - $500</option>
                                      <option value="$500 - $1000">$500 - $1000</option>
                                      <option value="$1000+">$1000+</option>
                                  </select>
                              </fieldset>
                          </div>
                          <div className="col-lg-3">
                              <fieldset>
                                  <label for="chooseplan" className="form-label">Pick a Plan</label>
                                  <select name="Plan" className="form-select" aria-label="Default select example" id="chooseCategory">
                                      <option selected>Choose plan</option>
                                      <option value="Standard">Standard</option>
                                      <option value="Professional">Professional</option>
                                      <option value="Golden">Golden</option>
                                      <option value="Premium">Premium</option>
                                  </select>
                              </fieldset>
                          </div>
                          <div className="col-lg-12">                        
                              <fieldset>
                                  <button className="main-button">Search Now</button>
                              </fieldset>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    </div>
  )
}

export default Search
