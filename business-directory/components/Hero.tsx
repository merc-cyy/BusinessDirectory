import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="text-center">
      <div className="relative">
        <Image
          src="/hero_background.png"
          alt="hero-image"
          width={800}
          height={200}
          className="w-full"
        />

        <div className="absolute inset-0 z-10 items-center justify-center mt-[70px] ">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCOVER
          </h2>
          <h2 className="text-[20px]">Your Amazing City</h2>
          <div className="mt-5 z-10 flex gap-2 items-center justify-center">
            <input
              type="text"
              placeholder="Search for what you need!"
              className="z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm"
            />
            <button className="bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero