import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import User from "./components/Pages/User/User";
import Login from "./components/Pages/Auth/Login";
import Signup from "./components/Pages/Auth/Signup";
import Series from "./components/Pages/Home/Series/Series";
import Movies from "./components/Pages/Home/Movies/Movies";
import Search from "./components/Pages/Home/Search/Search";
import Favorites from "./components/Pages/Home/Favorites/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/search" element={<Search />} />
      {/* <Route path="/favorites" element={<Favorites />} /> */}
    </Routes>
  );
}

export default App;
