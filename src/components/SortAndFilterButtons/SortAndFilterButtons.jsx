export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div
      className="sortButtons"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <button
          className="sortByTitleAsc"
          onClick={() => {
            handleSort("title", 1);
          }}
        >
          Ascending Order
        </button>
      </div>
      <div>
        <button
          className="sortByTitleDesc"
          onClick={() => {
            handleSort("title", -1);
          }}
        >
          Descending Order
        </button>
      </div>

      <div>
        <button
          className="sortByPriceAsc"
          onClick={() => {
            handleSort("price", 1);
          }}
        >
          Price Asc
        </button>
      </div>

      <div>
        <button
          className="sortByPriceDesc"
          onClick={() => {
            handleSort("price", -1);
          }}
        >
          Price Desc
        </button>
      </div>
    </div>
  );
};
