import "./App.css";
import { Route , Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";



function App() {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/auth" element={<SignIn/>} />
        <Route path="/checkout" element={<Checkout/>} />

      </Route>
    </Routes>
  )
  
}

export default App;
