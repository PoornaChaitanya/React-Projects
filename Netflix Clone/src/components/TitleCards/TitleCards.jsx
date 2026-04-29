import { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();

    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `/api/tmdb/movie/${category || "now_playing"}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
        signal: controller.signal,
      },
    )
      .then((res) => res.json())
      .then((res) => setApiData(Array.isArray(res.results) ? res.results : []))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    const currentRef = cardsRef.current;

    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      controller.abort();
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel, {
          passive: false,
        });
      }
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={
                  card.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                    : "https://placehold.co/500x281?text=No+Image"
                }
                alt="movie poster"
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
