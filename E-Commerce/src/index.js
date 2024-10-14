import * as React from "react";
import { createRoot } from "react-dom/client";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import {
  createBrowserRouter,
  RouterProvider,
  
  Link,
} from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import AllHomepage from "./Homepage/AllHomepage";
import AllAbout from "./About/AllAbout";
import AllExplore from "./Explore/AllExplore";
import AllGallery from "./Gallery/AllGallery";
import AllContact from "./Contact/AllContact";
import AllShop from "./Shop/AllShop";
import AllCart from "./Cart/AllCart";
//import App from "./Details/App";
import AllDetails from "./Details/AllDetails";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
//import Payment from "./Components/Payment";
//import PaymentDetails from "./Components/PaymentDetails";
import App from "./App";


  AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AllHomepage/>
    ),
  },
  {
    path: "about",
    element: <AllAbout/>,
  },

  {
    path: "Explore",
    element: <AllExplore/>,
  },

  {
    path: "Gallery",
    element: <AllGallery/>,
  },

  {
    path: "Contact",
    element: <AllContact/>,
  },

  {
    path: "Shop",
    element: <AllShop/>,
  },

  {
    path: "Cart",
    element: <AllCart/>,
  },

  {
    path: "Details/:id",  
    element: <AllDetails />,
  },

  {
    path: "SignUp",
    element: <SignUp/>,
  },

  {
    path: "Login",
    element: <Login/>,
  },

  {
    path: "App",
    element: <App/>,
  },

  // {
  //   path: "checkout",
  //   element: <CheckoutButton/>,
  // },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);