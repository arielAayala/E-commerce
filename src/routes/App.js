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
            <Route exact path="/" element={<ProductsProvider><CartProvider><Home/></CartProvider></ProductsProvider>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/admin" element={<ProductsProvider><ProtectedRouteAdmin><Admin/></ProtectedRouteAdmin></ProductsProvider>} />
            <Route exact path="/products" element={<ProductsProvider><CartProvider><Products></Products></CartProvider></ProductsProvider>}/>
            <Route exact path="/cart" element={<ProductsProvider><CartProvider><ProtectedRoute><Cart/></ProtectedRoute> </CartProvider></ProductsProvider> } />
            <Route exact path="/about" element={ <ProductsProvider><CartProvider><About/></CartProvider></ProductsProvider>    } />
            <Route  exact path="/profile" element={<ProductsProvider><CartProvider><Profile/></CartProvider> </ProductsProvider> } />
          </Routes>
      </AuthProvider>

  );
}

