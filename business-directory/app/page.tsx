"use client"
import Image from "next/image";
import Hero from "@/components/Hero"
import PlaceList from "@/components/PlaceList";
import { useState, useEffect } from "react";


export default function Home() {

  const [placeList, setPlaceList] = useState([])
  useEffect(()=>{
    getPlaceList('Hotels in Chicago');

  },[])

  const getPlaceList= async(value:string) => {

    setPlaceList([]);
    const result=await fetch("/api/google-place-api?q=" + value)
    const data= await result.json();

    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  }

  return (
    <div>
      <Hero userInput={(value: string) => getPlaceList(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
