import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbars from "./components/Navbar/Navbars";
import { Login } from "./components/Login/Login";
import Orderlist from "./components/Orderlist/Orderlist";

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/orderlist" element={<Orderlist></Orderlist>}></Route>
      </Routes>
    </div>
  );
}

export default App;
