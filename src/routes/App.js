import AuthProvider from "../context/authContext"
import {Route,Routes} from "react-router-dom"
import Home from "../containers/home";
import Login from "../containers/login"
import Register from "../containers/register";
export default function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
      

  );
}

