import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Pages/Homepage/Homepage";
import "./App.css";
import UserList from "./components/Pages/userList/UserList";
import ProductList from "./components/Pages/productList/ProductList"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
