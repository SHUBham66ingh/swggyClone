
export default function RestInfo(restData)
{
      return(

        <div className=" flex  w-full justify-between">
            <div className="w-[70%]">
                <p>{restData?.name}</p>
                <p>{ "₹"+ restData?.defaultPrice}</p>
                 <span>{restData?.ratings?.aggregatedRating?.rating}</span>
                 <span>{"("+restData?.ratings?.aggregatedRating?.rating+")"}</span>
                 <p>
                    {restData?.description}
                 </p>
            </div>

            <div className="w-[20%] relative">
              <img className="w-full h-36 object-cover" src={ " " + restData.imageId }></img>
              <button className="absolute bottom-0 letf-0 text-green-600 px-4 py-2 bg-white"></button>


        
            </div>
        </div>

      )
}