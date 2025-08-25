export default function RestInfo({ restData }) {
  return (
    <>
      <div className="flex w-full justify-between mb-4 pb-4 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white p-4">
        {/* Left section - Info */}
        <div className="w-[70%] pr-4">
          <p className="text-2xl text-gray-800 font-bold mb-1">{restData?.name}</p>
          <p className="text-lg text-gray-700 font-medium">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-700 font-semibold">
              {restData?.ratings?.aggregatedRating?.rating}
            </span>
            <span className="text-gray-500 text-sm">
              {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
            </span>
          </div>
          <p className="mt-2 text-gray-600 leading-relaxed text-sm">
            {restData?.description}
          </p>
        </div>

        {/* Right section - Image & Button */}
        <div className="w-[25%] relative flex justify-center">
          <img
            className="w-full h-36 object-cover rounded-2xl shadow-md"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
            alt={restData?.name}
          />
          <button className="absolute bottom-2 bg-white text-green-600 border border-green-500 rounded-full px-5 py-1.5 text-sm font-semibold shadow-md hover:bg-green-50 transition-all">
            ADD
          </button>
        </div>
      </div>
      <hr className="mb-6 mt-2 border-gray-200" />
    </>
  );
}
