import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./component/register";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/signup";
import Home from "./component/home";
import Details from "./component/details";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
export default function App() {


  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/aravind" element={<Register />} /> */}
          <Route path="/" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />


          {/* <Route path="/" element={<Navigate replace to="/aravind" />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
