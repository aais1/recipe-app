import {Link} from 'react-router-dom'

const Recipe = ({recipe}) => {
    console.log(recipe.idMeal);
    return (
    
      <div className='h-[500px] md:h-[600px] w-[100%] border border-black hover:border-white rounded-md'>
        <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className='h-[250px] md:h-[300px] w-[100%] rounded-tr-md rounded-tl-md'
          onError={(e) => { e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg' }}
        />
        <div className='text-white m-1'>
            <div className="flex justify-between items-center ">
                <h1 className='text-sm md:text-2xl'>{recipe.strMeal}</h1>
                <p className='text-sm md:text-md'>{recipe.strArea}</p>
            </div>
          <p className='mt-4 text-md md:text-lg line-clamp-6'>{recipe.strInstructions}</p>
          <a href={recipe.strYoutube} target='_blank' rel='noreferrer' className="text-red-500 mt-8 hover:underline">Watch on Youtube</a>
        </div>
        </Link>
      </div>  
    );
  };
  
  export default Recipe;