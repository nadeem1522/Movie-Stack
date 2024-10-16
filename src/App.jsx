import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleMovieDetail from "./components/SingleMovieDetail/SingleMovieDetail";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import "./App.css";
import Topbar from "./shared/component/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
    <Routes>
      <Route path="/" element={<Home apiPath="popular" />} />
      <Route path="movie/:id" element={<SingleMovieDetail />} />
      <Route path="/movies/popular" element={<Home apiPath="popular" />} />
      <Route path="/movies/top" element={<Home apiPath="top_rated" />} />
      <Route path="/movies/upcoming" element={<Home apiPath="upcoming" />} />
      <Route path="search" element={<SearchMovie apiPath="search/movie" />} />
    </Routes>
    </div>
  );
}

export default App;
