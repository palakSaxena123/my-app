import React, { useState } from 'react';
import "../SearchBar/SearchBar.scss";
import SearchIcon from '@mui/icons-material/Search';

 const types = ['buy' , 'rent'];

const SearchBar = () => {
     const [query , setQuery] = useState({
        type : "buy",
        location : "",
        minPrice : 0,
        maxPrice : 0,
     });

      const switchType = (val) =>{
        setQuery(prev =>({...prev , type : val}))

      }
  return (
    <div className='searchBar'>
        <div className='type'>
            {types.map((type)=>(
            <button key={type}
             onClick={()=> switchType(type)} 
            className={query.type === type ? "active" : ""}>{type}</button> ))}
            {/* <button>Buy</button>
            <button>Rent</button> */}
        </div>
        <form>
            <input type='text' name='location' placeholder='City Location'/>
            <input type='number' name='minPrice' placeholder='min price'/>
            <input type='number' name='maxPrice' placeholder='max price'/>
            <button>
            <SearchIcon/>
            </button>
        </form>

    </div>
  )
}

export default SearchBar;