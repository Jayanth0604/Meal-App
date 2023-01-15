import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css';

 function Body() {
    const [items,setitems] = useState([])


    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(res => {
            console.log(res.data);
            setitems(res.data.meals);


        }).catch(err =>{

            console.log(err);
        })


    },[])

  const meallist = items.map((obj)=>{
    return<div className='meal1'>
        <p>{obj.strMeal}</p>
        <img src ={obj.strMealThumb} className ='mealimg'></img>
        <p>{obj.idMeal}</p>
    </div>
  })
 
  return (
    <div>

    {meallist}

    </div>
  )
}

export default Body