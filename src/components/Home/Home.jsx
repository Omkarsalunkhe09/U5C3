import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [home, setHome] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/Books").then((res) => {
      setHome(res.data);
    });
  }, []);

  return (
    <div
      className="homeContainer"
      style={{
        display: "flex",
        border: "1px solid red",
        justifyContent: "space-around",
      }}
    >
      {home.map((e) => {
        return (
          <div>
            <div>{e.title}</div>
            <div>
              <img src={e.imageUrl} alt="pic" width="200" height="200" />
            </div>
            <div>{e.price}</div>
          </div>
        );
      })}
    </div>
  );
};

// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

// export const Home = () => {
//   // get all books when user lands on the page
//   // populate them as mentioned below

//   const Main = styled.div`
//     /* Apply some responsive styling to children */
//   `;

//   return (
//     <div className="homeContainer">
//       <h2 style={{ textAlign: "center" }}>Home</h2>
//       <SortAndFilterButtons
//         handleSort={
//           "give handleSort function to this component, that sorts books"
//         }
//       />

//       <Main className="mainContainer">
//         {/*
//             Iterate over books that you get from network
//             populate a <BookCard /> component
//             pass down books id, imageUrl, title, price and anything else that you want to
//             show in books Card.
//         */}
//       </Main>
//     </div>
//   );
// };
