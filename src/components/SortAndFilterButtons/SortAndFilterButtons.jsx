export const SortAndFilterButtons = () => {
  return (
    <div className="sortButtons">
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
      /* Create 4 sorting buttons here to sort by following criteria: sort title
      in Ascending order class: sortByTitleAsc sort title in Descending order
      class: sortByTitleDesc sort price asending order class: sortByPriceAsc
      sort price descending order class: sortByPriceDesc on every button click,
      call the reusable sorting function you received from Parent component, and
      sort the data. */
    </div>
  );
};
