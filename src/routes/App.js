import AuthProvider from "../context/authContext"
import ProductsProvider from "../context/productContext";
import {Route,Routes} from "react-router-dom"
import Home from "../containers/home";
import Login from "../containers/login"
import Register from "../containers/register";
import Admin from "../containers/Admin"
import Products from "../containers/Products"
import Cart from "../containers/Cart";
import ProtectedRoute from "../containers/protectedRoute";
import ProtectedRouteAdmin from "../containers/protectedRoutedAdmin";
import CartProvider from "../context/cartContext";
import About from "../containers/About";
import Profile from "../containers/profile";

export default function App() {
  return (
      <AuthProvider>
          <Routes>
            <Route exact path="/" element={<ProductsProvider><Home/></ProductsProvider>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/admin" element={<ProtectedRouteAdmin><ProductsProvider><Admin/></ProductsProvider></ProtectedRouteAdmin>} />
            <Route exact path="/products" element={<CartProvider><ProductsProvider><Products></Products></ProductsProvider></CartProvider>}/>
            <Route exact path="/cart" element={<ProtectedRoute><CartProvider><Cart></Cart></CartProvider></ProtectedRoute> } />
            <Route exact path="/about" element={<ProductsProvider><About/> </ProductsProvider> } />
            <Route  exact path="/profile" element={<ProductsProvider> <Profile/></ProductsProvider>} />
          </Routes>
      </AuthProvider>

  );
}

