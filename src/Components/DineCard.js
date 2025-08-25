
import DineOption from "./DineOption";


function DineCard({res})
{
    return(
           <div   className="max-w-sm flex-none">

            <a  target="_blank" href={res.cta.link}> 
            <div className="relative">
    <img  className="w-120 h-100 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+res?.info.mediaFiles[0]?.url}></img>
    <p  className="absolute botton-10    left-4"> {res?.info?.name} </p>
     <p  className="absolute botton-10    right-4">{res?.info.rating.value}</p>
       </div>
       </a>
        </div>     
    )
}


export default DineCard;