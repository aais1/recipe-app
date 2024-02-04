import React from "react";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [input, setInput] = React.useState("");
  const [recipes, setRecipes] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const fetchData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `${API_URL}${input}`;
    try {
        const data = await fetchData(url);
        setRecipes(data.meals);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="bg-slate-800 font-serif min-h-screen">
      <div className="w-screen md:w-[70vw] mx-auto pt-[100px] md:pt-[200px] text-center">
        <span className="text-4xl font-bold text-white underline underline-offset-4 hover:underline-offset-8 duration-200">
          Recipe Finder
        </span>
        <div className="text-white">
          <input
            type="text"
            className="bg-transparent p-2 border mt-10 rounded-tl-md rounded-bl-md"
            placeholder="Enter Recipe to search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="border py-2 ml-[1px] px-2 rounded-tr-md rounded-br-md
                           hover:bg-white hover:text-black duration-150"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
      {
        (loading) ? (
          <div className="text-white text-center mt-10">
            <h1>Loading...</h1>
          </div>
        ) :
        <div className="w-[95vw] mt-10 grid grid-cols-2 gap-2 md:gap-4 mx-auto md:w-[95vw] md:grid-cols-3">
        {recipes?.length > 0 && (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        )}
      </div>
      }
              {
            (!recipes && !loading) && (
                <div className="text-white text-center mt-10">
                    <h1>No Recipes Found</h1>
                </div>
            )
            }
    </div>
  );
};

export default Home;
