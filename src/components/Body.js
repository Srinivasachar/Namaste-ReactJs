import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
      <div className="body-container">
        <div className="filter">
            <button className="filter-btn">Top rater restaurants</button>
        </div>
        <div className="res-container">
          {resList.map((item, index) =>(
              <RestaurantCard key={index} resObject={item} />
          ))};
        </div>
      </div>
    );
  };

export default Body;