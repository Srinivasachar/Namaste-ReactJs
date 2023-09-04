import RestaurantCard, { withPromoptedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();
    const RestaurantCardWithPromoted = withPromoptedLabel(RestaurantCard);

    useEffect(function(){
      fetchData();
    },[])
    
    const fetchData = async() => {
        const listOfRestaurants = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const data = await listOfRestaurants.json();
        //setListRestaurant(data?.data?.cards[2]?.data?.data?.cards);
        setListRestaurant(data?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(data?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    };

    console.log("restaurant", listRestaurant);
    if(!onlineStatus){
      return (
        <h1>You are offline!! Please check your internet connection</h1>
      )
    }

    if(listRestaurant && listRestaurant.length === 0){
      return <Shimmer/>
    }

    return (
      <div className="body-container">
        <div className="flex justify-between">
            <div className="">
              <input className="border border-solid border-black m-2 py-1" value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
              <button className="bg-pink-300 px-4 py-1" onClick={()=>{
                const filteredRestaurant = listRestaurant.filter((restaurtant)=>
                  restaurtant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant)
              }}>Search Restaurants</button>
            
            <button className="bg-green-300 m-4 py-1 px-4" onClick={()=> {
                const filteredList = listRestaurant.filter(
                    (res)=> res.info.avgRating > 4.4
                );
                setFilteredRestaurant(filteredList);
            }}>Top rated restaurants</button>
            </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((item, index) =>(
              <Link to={"/restaurant/"+item.info.id}>
                {item.info.avgRating > 4 ? (<RestaurantCardWithPromoted key={index} resObject={item.info}/>): (<RestaurantCard key={index} resObject={item.info} />)}
              </Link>
          ))}
        </div>
      </div>
    );
  };

export default Body;