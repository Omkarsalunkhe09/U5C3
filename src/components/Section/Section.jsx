import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = ({ sectionP }) => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const [sectionS, setSectionS] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      let arr = [];
      data.map((e) => {
        if (e.section == sectionP) {
          arr.push(e);
        }
      });
      // console.log(arr);
      setSectionS([...arr]);
    });
  }, []);

  const handleSort = (key, n) => {
    if (n == -1) {
      sectionS.sort((a, b) => {
        return b[key] - a[key];
      });
      setSectionS([...sectionS]);
    } else {
      sectionS.sort((a, b) => {
        return a[key] - b[key];
      });
      setSectionS([...sectionS]);
    }
    // console.log(data);n
  };
  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {sectionS.map((e) => (
          <BookCard
            key={e.id}
            id={e.id}
            imageUrl={e.imageUrl}
            title={e.title}
            price={e.price}
          />
        ))}
      </Main>
    </>
  );
};
