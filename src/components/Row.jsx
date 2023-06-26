import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function Row({ title, fetchUrl, rowID }) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={30}
          className="bg-white  rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => {
            return <Movie item={item} key={id} like={like} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className="bg-white  rounded-full absolute opacity-50 right-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default Row;
