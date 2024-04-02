import React from "react";
import "../Filter/Filter.scss";
import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for<b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
          <option value="any">any</option>
         <option value="buy">Buy</option>
         <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="type" id="type">
          <option value="any">any</option>
         <option value="apartment">Apartment</option>
         <option value="house">House</option>
         <option value="condo">Condo</option>
         <option value="land">Land</option>
          </select>
     
        </div>
        <div className="item">
          <label htmlFor="minPrice">MinPrice</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPRICE"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="city">BadRoom</label>
          <input
            type="text"
            id="badroom"
            name="badroom"
            placeholder="any"
          />
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Filter;
