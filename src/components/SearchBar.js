import React from 'react';
import './stock.css';

function SearchBar(props) {

    return  (
      <div className="SearchBar">
        <form className="SearchBar_Form">
          <input className="SearchBar__Input"
                 value={ props.value }
                 onChange={(event) => props.onChange(event.target.value)} />
        </form>
      </div>
    );
}

export default SearchBar;