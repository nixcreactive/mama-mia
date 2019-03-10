import React, { useState, useContext, useEffect } from 'react';
import { RecipesContext }                         from '../util/RecipesContext';
import * as api                                   from '../util/api';
import RecipeCard                                 from '../components/cards/RecipeCard';
import Spinner                                    from '../util/Spinner';

const Recipes = () => {
  const { searchQuery } = useContext(RecipesContext);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]);

  /**
   * Get list of recipes matching the query
   */
  const fetchRecipes = async () => {
    const response = await api.getRecipes(`filter.php?i=${searchQuery}`);
    const data = await response.data.meals;
    setRecipes(data);
  };

  return (
    <div className="Recipes">
      {recipes ? recipes.map((item, index) => {
        let recipeCard = null;
        if (index < 8) {
          recipeCard =
            <RecipeCard
              key={index}
              id={item.idMeal}
              title={item.strMeal}
              image={item.strMealThumb}
            />
        }
        return recipeCard;
      }) : <Spinner/>}
    </div>
  );
};

export default Recipes;