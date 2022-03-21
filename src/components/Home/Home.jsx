import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import { styled } from "styled-components";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      setData([...data]);
    });
  }, []);

  const handleSort = (key, n) => {
    console.log(key);

    if (n == -1) {
      data.sort((a, b) => b[key] - a[key]);
      setData([...data]);
    } else {
      data.sort((a, b) => a[key] - b[key]);
      setData([...data]);
    }
  };

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <div
        className="mainContainer"
        style={{
          display: "grid",
          gridTemplateRows: "200px 200px ",
          gridTemplateColumns: "200px 200px 200px 200px",
          gridGap: "40px",
        }}
      >
        {data.map((e) => (
          <BookCard
            key={e.id}
            id={e.id}
            imageUrl={e.imageUrl}
            title={e.title}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

// {/*
// Iterate over books that you get from network
// populate a <BookCard /> component
// pass down books id, imageUrl, title, price and anything else that you want to
// show in books Card.
// */}
