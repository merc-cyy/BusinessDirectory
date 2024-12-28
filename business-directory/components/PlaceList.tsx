import React from 'react'
import PlaceItemCard from './PlaceItemCard';



function PlaceList({placeList}:any) {
  return (
    <div className="px-[10px] md:px-[120px] mt-7 z-10">
      <h2 className="text-[20px] font-bold">Search Results</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {placeList.map((place: any, index: number) => (
          <div key={index} className='z-10'>
            <PlaceItemCard place = {place}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceList