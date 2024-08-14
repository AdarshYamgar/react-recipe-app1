import React, { useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function RecipeId(){
    const {idMeal}=useParams()
  //  console.log(useParams())
  const[data,setData]=useState([])
  const[active,setActive]=useState("ingredient")
  useEffect(()=>{
   const fetchData=async()=>{
      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data=await api.json();
      //console.log(data.meals);
      setData(data.meals[0])
      console.log(data)
   }
   fetchData();
  },[idMeal])
    return(
        <>
        <Navbar/>
        <div style={{width:"90%",margin:"auto",textAlign:"center"}}>
            <h1>{data.strMeal}</h1>
            <div style={{display:"flex"}}>
            <div className="img" style={{width:"30%"}}>
                <img src={data.strMealThumb} alt="" style={{width:"18rem"}}></img>
            </div>
            <div className="content" style={{width:"60%"}}>
                <button className="btn" onClick={()=>setActive("ingredient")}>Ingredient</button>
                <button className="btn" onClick={()=>setActive("instruction")}>Instruction</button>


                {
                    active==="ingredient" ?(
                        <div>
                    <h2>{data.strIngredient1} - {data.strMeasure1}</h2>
                    <h2>{data.strIngredient2} - {data.strMeasure2}</h2>
                    <h2>{data.strIngredient3} - {data.strMeasure3}</h2>
                    <h2>{data.strIngredient4} - {data.strMeasure4}</h2>
                    <h2>{data.strIngredient5} - {data.strMeasure5}</h2>
                    <h2>{data.strIngredient6} - {data.strMeasure6}</h2>
                </div>
                    ):(
                        <p>{data.strInstructions}</p>
                    )
                }
                
                <div>
                   
                </div>
            </div>
            </div>
        </div>
        <TrendingSlider/>
        </>
    )
}
export default RecipeId;