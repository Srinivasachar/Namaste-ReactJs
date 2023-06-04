import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData();
    },[])

    const params = useParams();
    const fetchData = async ()=>{
        const data = await fetch(MENU_URL+params.id);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    };

    if(!resInfo){
        return <Shimmer/>
    }

    const {name, city, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards)
    return(
        <div>
            <h1>{name}</h1>
            <h3>{city}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        <h3>{item.card.info.name} - Rs {item.card.info.price ? item.card.info.price : item.card.info.defaultPrice/100}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;