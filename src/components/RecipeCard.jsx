import {Link} from 'react-router-dom'

const RecipeCard = ({idMeal,strArea,strInstructions,strMeal,strMealThumb,strYoutube}) => {
    console.log(idMeal);
    return (
    
      <div className='h-[450px] md:h-[600px] w-[100%] border border-black hover:border-white rounded-md'>
        <Link to={`recipe/${idMeal}`}>
        <img
          src={strMealThumb}
          alt={strMeal}
          className='h-[250px] md:h-[300px] w-[100%] rounded-tr-md rounded-tl-md'
          onError={(e) => { e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg' }}
        />
        <div className='text-white m-1'>
            <div className="flex justify-between items-center ">
                <h1 className='text-md font-bold md:text-2xl'>{strMeal}</h1>
                <p className='text-xs font-extralight md:text-md'>{strArea}</p>
            </div>
          <p className='mt-4 text-xs  md:text-lg line-clamp-6'>{strInstructions}</p>
          <a href={strYoutube} target='_blank' rel='noreferrer' className="text-xs md:text-lg text-red-500 mt-8 hover:underline">Watch on Youtube</a>
        </div>
        </Link>
      </div>  
    );
  };
  
  export default RecipeCard