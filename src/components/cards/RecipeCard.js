import React, { useContext } from 'react';
import { HistoryContext }    from '../../util/HistoryContext';

const RecipeCard = props => {
  const { routerHistory } = useContext(HistoryContext);

  /**
   * Redirect to single recipe page
   *
   * @param {Event} e - recipe card button on click event
   */
  const goToRecipe = e => {
    const recipeId = e.target.parentElement.id;
    routerHistory.push(`/recipe#${recipeId}`);
  };

  return (
    <div className="RecipeCard" id={props.id}>
      <img
        className="RecipeCard__image"
        src={props.image}
        alt=""
      />
      <h3 className="RecipeCard__title">{props.title}</h3>
      <button className="RecipeCard__button" onClick={goToRecipe}>Open</button>
    </div>
  );
};

export default RecipeCard;