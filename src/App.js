import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
