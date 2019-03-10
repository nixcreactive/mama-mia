import React, { useState, useContext } from 'react';
import SearchIcon                      from '../assets/icons/SearchIcon';
import { RecipesContext }              from '../util/RecipesContext';
import { HistoryContext }              from '../util/HistoryContext';

const MainForm = ({ history }) => {
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useContext(RecipesContext);
  const { setRouterHistory } = useContext(HistoryContext);
  setRouterHistory(history);

  /**
   * Redirect to recipes search results
   * Update searchQuery context to be used
   * within Recipes component
   *
   * @param {Event} e - form submit event
   */
  const getRecipes = e => {
    e.preventDefault();
    setSearchQuery(query);
    // Reset input field to default value
    setQuery('');
    history.push('/recipes');
  };

  return (
    <div className="MainForm">
      <form onSubmit={getRecipes} className="MainForm">
        <input
          className="MainForm__input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="e.g. chicken"
          name="query"
        />
        <label
          className="MainForm__label"
          htmlFor="query"
        >
          {SearchIcon()}
        </label>
      </form>
    </div>
  );
};

export default MainForm;