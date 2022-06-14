import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HomePage, DetailsPage, ShopPage } from "./pages/";
import { NavBar } from "./components/index";
import ShopCart from "./pages/ShopCart";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Navigation />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shopCart" element={<ShopCart />} />
      </Routes>
    </div>
  );
}

export default App;
