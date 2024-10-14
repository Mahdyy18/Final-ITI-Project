import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Top from "../Top";
import DataApi from "../Shop/DataApi";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check login status

  const handleCheckOut = () => {
    if (isLoggedIn) {
      navigate('/App'); // Navigate to Payment page if logged in
    } else {
      navigate('/Login'); // Navigate to Login page if not logged in
    }
  };

  if (isEmpty)
    return (
      <div className="text-center mt-4">
        <h3 className="text-center">Your cart is empty...</h3>
        <Link className="btn btn-dark" to="/Shop">
          SHOP NOW
        </Link>
      </div>
    );

  return (
    <div>
      <Container className="mt-4 pt-4">
        <Row>
          <Col md="8">
            <h1 className="text-center">Shopping cart</h1>
            <hr />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md="8" className="shadow-lg mb-3">
            <table className="table text-center">
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex flex-column">
                      <img
                        className="img-fluid cart-item-image"
                        src={item.image}
                        //  style={{ height: 50, width: 50 }}
                      ></img>
                       <p>{item.category}</p>
                    </td>
                    <td className="pt-3">{item.title}</td>

                    <td className="pt-3">
                      <button
                        className="mr-1 format-quantity2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <span className="mx-2 p-1 format-quantity-num">
                        {item.quantity}
                      </span>

                      <button
                        className="mr-1 format-quantity"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td className="pt-3">
                      {Math.round(item.price * item.quantity)}$
                    </td>

                    <td>
                      {/* <button className="btn btn-danger rounded-circle" style={{ marginLeft: '2rem' }}  onClick={() => removeItem(item.id)}>&times;
                                          </button> */}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="30"
                        fill="red"
                        class="bi bi-archive-fill"
                        viewBox="0 0 16 16"
                        onClick={() => removeItem(item.id)}
                      >
                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <Link className="btn btn-outline-dark" to="/">
                      Back Home
                    </Link>
                  </td>

                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => emptyCart()}
                    >
                      Delete All
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Col>

          <Col className="summary">
            <h4 className="text-center">SUMMARY</h4>

            <div className=" px-2 mb-2 d-flex justify-content-between">
              <h6>items</h6>
              <h6>{totalItems}</h6>
            </div>
            <hr />

            <div className=" px-2 mb-2 d-flex justify-content-between">
              <h6>Price</h6>
              <h6>${Math.round(cartTotal)}</h6>
            </div>

            <div className=" px-2 mb-2 d-flex justify-content-between">
              <h6>Discount</h6>
              <h6>0</h6>
            </div>

            <div className=" px-2 mb-2 d-flex justify-content-between">
              <h6>Shipping Cost</h6>
              <h6>0</h6>
            </div>

            <hr />

            <div className=" px-2 mb-2 d-flex justify-content-between">
              <h6>Total</h6>
              <h6>${Math.round(cartTotal)}</h6>
            </div>

            <div className="px-2 py-4 my-2">
              <button
                onClick={handleCheckOut} // Call handleCheckOut on button click
                className="btn btn-dark btn-lg m-auto pl-3 text-center float-end">
                Check Out 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  style={{ margin: '7px' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function AllCart() {
  return (
    <CartProvider>
      <Top />
      <div className="pt-5 pb-3 bg-black text-center"></div>

      <Cart />
    </CartProvider>
  );
}

export default AllCart;
