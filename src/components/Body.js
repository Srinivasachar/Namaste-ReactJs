import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(function(){
      fetchData();
    },[])
    
    const fetchData = async() => {
        const listOfRestaurants = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const data = await listOfRestaurants.json();
        setListRestaurant(data?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(data?.data?.cards[2]?.data?.data?.cards);
    };

    if(listRestaurant.length === 0){
      return <Shimmer/>
    }

    return (
      <div className="body-container">
        <div className="filter">
            <div>
              <input value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
              <button onClick={()=>{
                const filteredRestaurant = listRestaurant.filter((restaurtant)=>
                  restaurtant.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant)
              }}>Search Restaurants</button>
            </div>
            <button className="filter-btn" onClick={()=> {
                const filteredList = listRestaurant.filter(
                    (res)=> res.data.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
            }}>Top rated restaurants</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((item, index) =>(
              <RestaurantCard key={index} resObject={item.data} />
          ))}
        </div>
      </div>
    );
  };

export default Body;