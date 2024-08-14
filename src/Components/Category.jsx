import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
function Category(){
    const {name}=useParams()
    const[data,setData]=useState([])
  useEffect(()=>{
   const fetchData=async()=>{
      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
      const data=await api.json();
      //console.log(data.meals);
      setData(data.meals)
     // console.log(data)
   }
   fetchData();
  },[name])
    return(
        <>
        <Navbar/>
        <div style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(15rem ,1fr))",gridGap:"1rem",marginTop:"2rem"}}>
        {
            data.map((d)=>{
                return(
                    <Link to={`/${d.idMeal}`} className="link">
                    <div style={{textAlign:"center"}}>
                        <div className="img">
                            <img src={d.strMealThumb} alt="" style={{width:"10rem"}}></img>
                        </div>
                        <h2>{d.strMeal}</h2>
                    </div>
                    </Link>
                )
               })
        }
        </div>
        <TrendingSlider/>
        </>
    )
}
export default Category;