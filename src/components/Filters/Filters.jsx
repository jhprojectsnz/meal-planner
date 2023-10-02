import React from "react";
import "./Filters.css";
import CloseButton from "../CloseButton/CloseButton";

export default function Filters({ setShowFilters, setFilters, filters }) {
  function handleCheckboxChange(id) {
    setFilters((prev) =>
      prev.map((filter) =>
        filter.id === id ? { ...filter, checked: !filter.checked } : filter,
      ),
    );
  }

  function handleSubmit() {
    setShowFilters(false);
  }

  return (
    <div className="filters-container">
      <CloseButton onClickFunction={() => setShowFilters(false)} />
      <h5>Select Filters</h5>
      <ul className="filters-list">
        {filters.map((filter) => {
          return (
            <li className="filter-option" key={filter.id}>
              <input
                type="checkbox"
                name={`custom-checkbox-${filter.id}`}
                value={filter.text}
                checked={filter.checked}
                onChange={() => handleCheckboxChange(filter.id)}
              />
              <label
                className="filter-labels"
                htmlFor={`custom-checkbox-${filter.id}`}
              >
                {filter.text}
              </label>
            </li>
          );
        })}
      </ul>
      <button className="btn bold-btn" onClick={handleSubmit}>
        Select
      </button>
    </div>
  );
}
