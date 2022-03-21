export const SortAndFilterButtons = () => {
  return (
    <div
      className="sortButtons"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <br />
      <br />
      <div>
        <button className="sortByTitleAsc">Ascending Order</button>
      </div>
      <div>
        <button className="sortByTitleAsc">Descending order</button>
      </div>
      <div>
        <button className="sortByPriceAsc">price asending order</button>
      </div>
      <div>
        <button className="sortByPriceDesc">price descending order </button>
      </div>
    </div>
  );
};
