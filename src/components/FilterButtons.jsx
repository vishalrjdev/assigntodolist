import React from "react";

const FilterButtons = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("All")}>all </button>
      <button onClick={() => setFilter("active")}>active</button>
      <button onClick={() => setFilter("completed")}>completed</button>
    </div>
  );
};
export default FilterButtons;
