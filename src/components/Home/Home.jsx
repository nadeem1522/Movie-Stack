import { useEffect, useState } from "react";
import SingleMovieCard from "../SingleMovieCard/SingleMovieCard";
import "./style.css";
import Pagination from "../../shared/component/pagination/Pagination";

const Home = ({ apiPath }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`;

  const onPrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const onNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function fetchMoviesData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMoviesData();
  }, [url]);

  return (
    <div className="body pt-5 mt-5">
      <div className="movies-container">
      {console.log(data[0])}
        {data?.map((movie) => (
          <SingleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </div>
  );
};

export default Home;
