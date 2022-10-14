import AuthProvider from "../context/authContext"
import ProductsProvider from "../context/productContext";
import {Route,Routes} from "react-router-dom"
import Home from "../containers/home";
import Login from "../containers/login"
import Register from "../containers/register";
import Admin from "../containers/Admin"
export default function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/admin" element={<ProductsProvider><Admin/></ProductsProvider>} />
        </Routes>
      </AuthProvider>
  );
}

