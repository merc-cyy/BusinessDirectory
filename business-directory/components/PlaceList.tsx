import React from 'react'
import PlaceItemCard from './PlaceItemCard';

function PlaceList({placeList}:any) {
  return (
    <div className="px-[10px] md:px-[120px] mt-7">
      <h2 className="text-[20px] font-bold">Search Results</h2>

      <div>
        {placeList.map((place: any, index: number) => (
          <div key={index}>
            <PlaceItemCard place = {place}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceList