import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const [idData, setIdData] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then(({ data }) => {
      setIdData(data);
    });
  }, []);

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{idData.title}</h2>
        <img className="image" src={idData.imageUrl} alt="#" />
        <div className="author">{idData.author}</div>
        <div className="description">{idData.description}</div>
        <div className="price">{idData.price}</div>
        <div className="section">{idData.section}</div>
        <div className="isbnNumber">{idData.isbnNumber}</div>
        <ul className="reviews">
          {/* {idData.reviews.map((e) => {
            return <li>{e}</li>;
          })} */}
        </ul>
      </div>
    </>
  );
};
