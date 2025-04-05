import React from "react";
import rigo from "../../img/rigo-baby.jpg"




export const Card = ({title,description}) => {   


    return (

        <div>
<div className="card" >
  <img src={rigo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title} </h5>
    <p className="card-text"> {description} </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </div>
    )
}

export default Card;