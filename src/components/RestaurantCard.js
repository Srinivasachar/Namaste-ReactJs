import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({resObject}) => {
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:drop-shadow-xl">
        <img
          className="rounded-lg"
          alt="logo"
          src={CDN_URL+resObject.cloudinaryImageId}
        ></img>
        <h2 className="font-bold pb-14 pt-3">{resObject.name}</h2>
        <h4>{resObject.costForTwo}</h4>
        
        <h4>{resObject.sla.slaString}</h4>
        <h4 className="pt-3 font-semibold text-yellow-700">{resObject.avgRating + " star"}</h4>
      </div>
    )
  };


  export const withPromoptedLabel = (RestaurantCard) =>{
      return (props) =>{
          return(
            <div>
              <label className="absolute bg-black text-white m-6">Promoted</label>
              <RestaurantCard {...props}/>
            </div>
          )
      }
  };

  export default RestaurantCard;