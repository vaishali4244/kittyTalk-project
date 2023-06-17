import React from "react";


const SearchEngine = ({searchField, searchChange}) => {
    return (
        <div>
           <input className="pa2 br4 mb1 " type="search" placeholder="Search Kitty" onChange={searchChange} /> 
        </div>
    )
}
export default SearchEngine;