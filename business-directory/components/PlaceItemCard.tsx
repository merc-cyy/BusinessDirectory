import React from 'react'
import Image from 'next/image'


const BASE_URL_PHOTO =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";


function PlaceItemCard({place}:any) {
  return (
    <div className="w-full z-10 border-[1px] rounded-xl shadow-md">
      <Image
        src={BASE_URL_PHOTO+ "&photo_reference=" + place?.photos[0]?.photo_reference + "&key=" + process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY }
        alt="placeholder"
        width={200}
        height={80}
        className="w-full h-[150px] object-cover rounded-t-xl"
      />

      <div className="p-2">
        <h2 className="line-clamp-2">{place.name}</h2>
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5  "
            ></path>
          </svg>

          <h2 className="text-[12px] text-gray-400 line-clamp-2 tracking-wider">
            {place.formatted_address}
          </h2>
        </div>


        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.11a.563.563 0 00.475.345"
            ></path>

          </svg>

          <h2 className="text-[12px] text-gray-400 line-clamp-2 tracking-wider">
            {place.rating}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PlaceItemCard