import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";

import axios from "axios";
import { useEffect, useState } from "react";

export const Section = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  return (
    <div
      className="sectionContainer"
      style={{
        display: "flex",
        border: "1px solid red",
        justifyContent: "space-around",
      }}
    >
      {data.map((e, i) => {
        return (
          <div key={i}>
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

// import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";

// export const Section = () => {
//   // you will receive section name from URL here.
//   // Get books for only this section and show
//   //   Everything else is same as Home page

//   const Main = styled.div`
//     /* Same as Homepage */
//   `;

//   return (
//     <>
//       <h2 style={{ textAlign: "center" }}>
//         {
//           //   Show section name here
//         }
//       </h2>
//       <SortAndFilterButtons handleSort={"give sorting function to component"} />

//       <Main className="sectionContainer">
//         {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
//       </Main>
//     </>
//   );
// };
