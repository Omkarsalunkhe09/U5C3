import { Link } from "react-router-dom";

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
          <Link to={"/"}>
            <button className="home">home</button>{" "}
          </Link>
        </div>
        <div>
          <Link to={"/section/history"}>
            <button className="history">History</button>
          </Link>
        </div>
        <div>
          <Link to={"/section/mystery"}>
            <button className="mystery">Mystery</button>
          </Link>
        </div>
        <div>
          <Link to={"/section/mythology"}>
            <button className="mythology">Mythology</button>
          </Link>
        </div>
        <div>
          <Link to={"/section/technology"}>
            <button className="technology"> Technology</button>
          </Link>
        </div>
      </div>
    </>
  );
};
