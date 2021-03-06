import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bookdetailspage/:id" element={<BookDetailsPage />} />
        <Route
          path="/section/history"
          element={<Section sectionP={"History"} />}
        />
        <Route
          path="/section/mythology"
          element={<Section sectionP={"Mythology"} />}
        />
        <Route
          path="/section/technology"
          element={<Section sectionP={"Technology"} />}
        />
        <Route
          path="/section/mystery"
          element={<Section sectionP={"Mystery"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
