import AuthContext from "../context/context"
import {Route,Routes} from "react-router-dom"
import Home from "../containers/home";
import Login from "../containers/login"
export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

  );
}

