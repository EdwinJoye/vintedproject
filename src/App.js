import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import Achat from "./pages/Achat";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 5 });
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  return (
    <Router>
      <Header setUser={setUser} token={token}></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route
          path="/signup"
          element={<SignUp setUser={setUser}></SignUp>}
        ></Route>
        <Route
          path="/login"
          element={<Login setUser={setUser}></Login>}
        ></Route>
        <Route path="/achat" element={<Achat></Achat>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
