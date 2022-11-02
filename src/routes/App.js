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
import Header from "../components/header";
import { Footer } from "../components/footer";
export default function App() {
  return (
      <AuthProvider>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/admin" element={ <ProductsProvider><Admin/></ProductsProvider>} />
            <Route exact path="/products" element={<ProductsProvider><Products></Products></ProductsProvider>}/>
            <Route exact path="/cart" element={ <ProtectedRoute><Cart></Cart></ProtectedRoute> } />
          </Routes>
          <Footer></Footer>
      </AuthProvider>

  );
}

