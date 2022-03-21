import { Routes, Route } from "react-router";
import { Home } from "../Home/Home";
// import { Section } from "../Components/Section/Section";
// import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
// import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Navbar/Navbar";
import { Section } from "../Section/Section";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/section/:id" element={<Section />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
