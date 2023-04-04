import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchItem from "./components/searchItem/SearchItem";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { Booking } from "./components/booking/Booking";
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels/booking" element={<Booking/>}/>              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
