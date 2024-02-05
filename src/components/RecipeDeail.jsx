import React from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';

//this is a PAGE to show the details of a recipe 

const RecipeDetail = () => {
        const [recipe,setRecipe]=React.useState({})
        const [loading,setLoading]=React.useState(false)
        const {id}=useParams();

        document.title="Recipe Detail";

        const fetchRecipe=async()=>{
                setLoading(true)
                try {
                const resp=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data=await resp.json()
                setRecipe(data.meals[0])
                setLoading(false)
                } catch (error) {
                console.error(error)
                }
        }

        React.useEffect( ()=>{
                fetchRecipe()
        },[])
    return (
        <>
        {
                loading ? (<div className="flex items-center bg-slate-800 justify-center h-screen"><Loader/></div> ) :
        
        <div className='bg-slate-800 min-h-screen'>
                <div className='w-[80vw] mx-auto '>
                <div className='flex-col flex md:flex-row justify-between mb-4 md:mb-0 p-4'>
                <div className='text-white'>
                <h1 className='text-4xl underline underline-offset-1 hover:underline-offset-4 duration-150 my-4'>{recipe.strMeal}</h1>
                <h1 className='text-md my-2'>Area : {recipe.strArea}</h1>
                <h1 className='text-md my-2 text-gray-500 underline'>Category : {recipe.strCategory}
                <ol className='flex flex-wrap gap-4 mt-2 text-white'>
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
                <a href={recipe.strYoutube} className='text-red-500 font-bold text-2xl underline underline-offset-1 hover:underline-offset-4 duration-150'>Watch on Youtube</a>
                </div>
                <img src={recipe.strMealThumb} alt={recipe.strMeal}
                className='w-[100%] h-[100%] md:w-[250px] md:h-[250px] mt-5 md:mt-0' />
                </div>
                <div className='w-[80vw] mx-auto p-4'>
                <h1 className='text-2xl text-white mb-4 underline'>Instructions</h1>
                <p className='text-white'>{recipe.strInstructions}</p>
                </div>
                </div>
        </div>
        }
        </>
    )
}

export default RecipeDetail