import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import Payment from "./pages/Payment";
import Publish from "./components/Publish";

const stripePromise = loadStripe("pk_test_votreCléPublique");

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [searchBar, setSearchBar] = useState("");
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
      <Header
        setSearchBar={setSearchBar}
        setUser={setUser}
        token={token}
      ></Header>
      <Routes>
        <Route path="/" element={<Home searchBar={searchBar}></Home>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route
          path="/signup"
          element={<SignUp setUser={setUser}></SignUp>}
        ></Route>
        <Route
          path="/login"
          element={<Login setUser={setUser}></Login>}
        ></Route>
        {/* <Route path="/achat" element={<Achat></Achat>}></Route> */}
        <Route
          path="/publish"
          element={<Publish token={token}></Publish>}
        ></Route>
        <Route
          path="/achat"
          element={<Payment token={token}> </Payment>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
