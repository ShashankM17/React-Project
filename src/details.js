import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {
    const [Recipe, setRecipe] = useState();
    const { MealId } = useParams();
    //  

    const getdetails = async () => {

        const getdata = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`);
        const jsondata = await getdata.json();
        //  console.log(jsondata.meals);
        setRecipe(jsondata.meals[0])

    }
    if (Recipe != "") {
        
        getdetails();
    }

    return (
        <div>
            <br></br>
            <h2 className='Recipe'>RECIPE DETAILS:</h2>
            <br></br>
            
            {
                !Recipe ? "data is not available" :
                
                    <div className='container'>
                        

                        <div class="card mb-3 bg-warning" style={{maxwidth: "540px"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Recipe.strMealThumb} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Recipe Details:</h5>
                                        <h3>{Recipe.strMeal}</h3>
                                        <h4>Instructions:</h4>
                                        <p class="card-text">{Recipe.strInstructions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </div>
      

    )


}

export default Details;
