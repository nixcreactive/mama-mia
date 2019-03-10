import React, { useState, useEffect } from 'react';
import * as api                       from '../util/api';
import Spinner                        from '../util/Spinner';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeId = window.location.hash.substr(1);
    api.getRecipes(`lookup.php?i=${recipeId}`)
    .then(res => {
      setRecipe(res.data.meals[0]);
    })
    .catch(err => console.log(err));
  }, []);

  /**
   * Combine ingredient name and measure
   *
   * @returns {Array}
   */
  const ingredientsRenderer = () => {
    let ingredients = [];
    for (let ing in recipe) {
      if (ing.includes('Ingredient') && recipe[ing] && recipe[ing].length) {
        let ingIndex = ing.split('strIngredient')[1];
        let measure = recipe[`strMeasure${ingIndex}`];
        let ingredient = `${recipe[ing]} - ${measure}`;
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };

  return (
    <React.Fragment>
      {recipe ?
        <div className="Recipe">
          <div className="Recipe__media">
            <img src={recipe.strMealThumb} alt=""/>
            <iframe
              allowFullScreen
              title="Video"
              src={recipe.strYoutube.replace('watch?v=', 'embed/')}
              frameBorder="0"
            />
          </div>
          <div className="Recipe__ingredients">
            <h3 className="Recipe__title">{recipe.strMeal}</h3>
            {ingredientsRenderer().map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
        </div> : <Spinner/>}
    </React.Fragment>
  );
};

export default Recipe;