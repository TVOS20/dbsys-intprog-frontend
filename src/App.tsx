import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";

import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Office from "./pages/Office";
import Product from "./pages/Product";

Axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/office" element={<Office />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
