import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
   const [term, setTerm] = useState('');

   const onInputChange = (e) => {
      setTerm(e.target.value);
   };

   const onSubmit = (e) => {
      e.preventDefault();
      // Make sure we call callback from parent component
      onFormSubmit(term);
   };

   return (
      <div className="search-bar ui segment">
         <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
               <label>Video Search</label>
               <input type="text" value={term} onChange={onInputChange} />
            </div>
         </form>
      </div>
   );
};

export default SearchBar;
