import "./App.css";
import { Route , Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";
import Shop from "./routes/shop/Shop";



function App() {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/auth" element={<SignIn/>} />

      </Route>
    </Routes>
  )
  
}

export default App;
