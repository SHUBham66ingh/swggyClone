import { imageGridCards } from "../utils/FoodData";
import Foodcard from "./FoodCard";


 function FoodOption(){
  return (
     <>
      <div className="w-[80%] container mx-auto flex  flex-wrap  mt-20  gap-5  overflow-x-scroll ">
        {
            imageGridCards.map((food)=><Foodcard Key={food.id}   foodData={food}></Foodcard>)
        }

      </div>

     </>
  )
}

export default FoodOption