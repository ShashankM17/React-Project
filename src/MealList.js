import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MealItem from './MealItem';
import food from './food.jpg';
import { useState } from 'react';

function MealList() {
  
 
 const [search, setsearch] = useState();
  const   [data, setdata] = useState([]);
 

    const add =(evt) =>{
    setsearch(evt.target.value);
  }

   const get = async ()=>{
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    let data = await fetch(url);
    let  get = await data.json();
    setdata(get.meals);
    console.log(get);
    //
   }

    return (
      <section  style={{textAlign:"center"}}>

       <h1   className='h1' >RECIPE APP </h1>
        <div  className="container my-4 ">
      <div  style={{display:"flex", justifyContent:"center"}} className="form mx-2">
      <input   onChange={add}  style={{width:"600px", }}  type="text" className="form-control mx-1"placeholder="search for dishe"/>
      <button className="btn btn-success" onClick={get}>search</button>
       
      </div>
       
      <div className='row' >
        {!data ? " ":data.map((element) =>{
        return(
            
           <div   key={element.strMealThumb} className='col-md-3'>  <MealItem  url ={element.strMealThumb}  detal={element.meals}
            go ={element.idMeal} title ={element.strMeal}/> </div>

           
        )
      })}
    
     <div class="wave-container">
    <h1 class="wave-text">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      

    </h1>
</div>
<p>


<h2 className='h2'>hellow welcome to our website here you can search for your favourite food and it will be delivered within 2 hours
   and you can pay the bill after getting your order!
   and your order here you will get the testy and healthy food from our restaurant and you can also track your order
    call 9535263819 to track and order your foods</h2>
    
</p>
      

      </div>
     
      
     
    </div>
       </section>
    )}

    export default MealList;