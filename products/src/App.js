import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import MainHome from "./components/MainHome/MainHome";
import Intro from "./components/IntroPage/IntroPage";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import AddToCart from "./components/AddToCart/AddToCart";
import { CartProvider } from "./components/CartToContext/CartToContext";
import CartPopup from "./components/CartPopup/CartPopup";
import About from "./components/About/Aboutus";
import Privacy from "./components/Privacy/Privacy";
import { FavoriteProvider } from "./components/FavoritesContext/FavoritesContext";
import Favorite from "./components/FavoritePage/Favorite";
import HelpSupport from "./components/HelpSupport/HelpSupport";
import Recipe from "./components/Recipe/Recipe";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import AuthPage from "./components/AuthPage/AuthPage";
import Address from "./components/Address/Address";
import PaymentsPage from "./components/PaymentsPage/PaymentsPage";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import CookiePolicy from "./components/Cookie/Cookie";
import SearchPage from "./components/SearchPage/SearchPage";

import PlacedSuccessfully from "./components/Placed Successfully/PlacedSuccessfully";
function AppContent() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const showAuth =
    !token &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup";

  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/food/:category/:id" element={<FoodDetail />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/helpsupport" element={<HelpSupport />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element ={<Address/>}/>
        <Route path="/payment" element={<PaymentsPage />} />
        <Route path = "/termsandcondition" element ={<TermsConditions/>}/>
        <Route path ="/cookiepolicy"  element ={<CookiePolicy/>}/>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/placedsuccessfully" element={<PlacedSuccessfully/>}/>
      </Routes>

      {showAuth && <AuthPage />}

      <CartPopup />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;