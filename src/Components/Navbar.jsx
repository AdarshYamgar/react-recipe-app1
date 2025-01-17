import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
function Navbar(){
    const navigate=useNavigate()
    const[input,setInput]=useState(" ")
    const handleSubmit=(e)=>{
        e.preventDefault();
       navigate(`/search/${input}`)
    }
    return(
        <>
        <div className="nav">
            <div className="left">
                <h2>React Recipe App</h2>
            </div>
            <div className="search">
                <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                </form>
                
            </div>
            <div className="right">
                <Link to={`/category/indian`} className="link">
                <div>India</div>
                </Link>
                <Link to={`/category/american`} className="link">
                <div>American</div>
                </Link>
                <Link to={`/category/british`} className="link">
                <div>British</div>
                </Link>
                <Link to={`/category/chinese`} className="link">
                <div>Chinese</div>
                </Link>
                <Link to={`/category/thai`} className="link">
                <div>Thai</div>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Navbar;