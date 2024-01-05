import { Route, Router } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";


function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Route path="/MovieCard" element={<MovieCard/>} />
    <Route path="/AboutUs" element="../1_hafta_bootstrap" />
    
    </Router>
    </>
  );
}

export default App;
