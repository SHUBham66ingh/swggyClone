import { Link } from "react-router";
export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/" + restInfo?.info?.id}>
      <div className="max-w-[280px]  mb-2 transform transition  duration-200 hover:scale-95">
        <img
          className="w-70 h-45 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo.info.cloudinaryImageId
          }
        ></img>
        <div className="w-[95%]  mx-auto  mt-3">
          <div className="font-bold text-xl">{restInfo?.info?.name}</div>

          <div className="flex gap-2   items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="green"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
            </svg>
            <span className="text-lg  font-bold">
              {restInfo?.info?.avgRating}
            </span>
            <span className="text-lg">{restInfo?.info?.sla?.slaString}</span>
          </div>

          <div className="text-gray-600 text-base mt-1 h-6 overflow-hidden">
            {restInfo?.info?.cuisines.join(" ")}
          </div>
        </div>
      </div>
    </Link>
  );
}
