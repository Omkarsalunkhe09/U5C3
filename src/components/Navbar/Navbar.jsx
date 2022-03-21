import { Link } from "react-router-dom";
import { Section } from "../Section/Section";
// import { Section } from "../Section/Section";

export const Navbar = () => {
  return (
    <>
      <div
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          {" "}
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to={`section/History`} element={<Section />}>
            {" "}
            <button>History</button>{" "}
          </Link>
        </div>
        <div>
          <Link to={`section/Mystery`} element={<Section />}>
            <button>Mystery</button>
          </Link>
        </div>
        <div>
          <Link to={`section/Mythology`} element={<Section />}>
            <button>Mythology</button>
          </Link>
        </div>
        <div>
          <Link to={`section/Techonology`} element={<Section />}>
            <button>Technology</button>
          </Link>
        </div>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
