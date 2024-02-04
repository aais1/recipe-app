import React from 'react'
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
        const [recipe,setRecipe]=React.useState({})
        const {id}=useParams();

        const fetchRecipe=async()=>{
                try {
                const resp=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data=await resp.json()
                setRecipe(data.meals[0])
                } catch (error) {
                console.error(error)
                }
        }

        React.useEffect( ()=>{
                fetchRecipe()
        },[])
    return (
        <div className='bg-slate-800 min-h-screen'>
                <div className='w-[80vw] mx-auto '>
                <div className='flex-col flex md:flex-row justify-between p-10'>
                <div className='text-white'>
                <h1 className='text-4xl underline underline-offset-1 hover:underline-offset-4 duration-150 my-4'>{recipe.strMeal}</h1>
                <h1 className='text-md my-2'>Area : {recipe.strArea}</h1>
                <h1 className='text-md my-2 text-gray-500 underline'>Category : {recipe.strCategory}
                <ol className='flex flex-wrap gap-4 mt-4 text-white'>
                <li>{recipe.strIngredient1}</li>
                <li>{recipe.strIngredient2}</li>
                <li>{recipe.strIngredient3}</li>
                <li>{recipe.strIngredient4}</li>
                <li>{recipe.strIngredient5}</li>
                <li>{recipe.strIngredient6}</li>
                <li>{recipe.strIngredient7}</li>
                <li>{recipe.strIngredient8}</li>
                <li>{recipe.strIngredient9}</li>
                <li>{recipe.strIngredient10}</li>
                <li>{recipe.strIngredient11}</li>
                <li>{recipe.strIngredient12}</li>
                <li>{recipe.strIngredient13}</li>
                <li>{recipe.strIngredient14}</li>
                </ol>
                </h1>
                </div>
                <img src={recipe.strMealThumb} alt={recipe.strMeal}
                className='w-[100%] h-[100%] md:w-[250px] md:h-[250px]' />
                </div>
                <div className='w-[80vw] mx-auto p-10'>
                <h1 className='text-2xl text-white mb-4 underline'>Instructions</h1>
                <p className='text-white'>{recipe.strInstructions}</p>
                </div>
                </div>
        </div>
    )
}

export default RecipeDetail