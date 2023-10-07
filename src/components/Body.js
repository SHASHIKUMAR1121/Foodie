import { restarauntList } from "../config";
import  RestaurantCard  from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText,restaurants){
   const filterData =restaurants.filter((restaurant)=>
   restaurant.data.name.includes(searchText));
   return filterData;
}

const Body =()=>{
    const [restaurants,setRestaurants]=useState(restarauntList);
const [searchText,setSearchText]=useState("");



    return(
        <>
        <div classname="search-container">
            <input type="text" 
            className="search-input" 
            placeholder="search" 
            value={ searchText} 
            onChange={(e)=>{
            setSearchText(e.target.value)}}/>
           
        <button className="search-btn"
         onClick ={()=>{
        const data =   filterData(searchText, restaurants);
        setRestaurants(data);
        }} 
        >
        search
        </button>
        
        </div>
       <div className="restaurant-list">
        
        {restaurants.map((restaurant)=>{
        return  <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
        })}
        

       </div>
       </>
    );
};

export default Body;