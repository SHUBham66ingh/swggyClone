import { GroceryGridCard } from "../utils/Grocery";
import GroceryCard from './GroceryCard';


export default function GroceryOption() 
{


    return(
    
        

        <div className="mt-20  w-[80%]  container mx-auto mt-20">

        <h1 className="text-center font-bold text-2xl">Shop On instamart</h1>
        <div className="w-[80%] container mx-auto flex  flex-nowrap overflow-x-auto  mt-5  gap-5">
        {
            GroceryGridCard.map((foodData)=><GroceryCard Key={foodData.id}   foodData={foodData}></GroceryCard>)
        }

      </div>
      </div>


        
    );

       
}