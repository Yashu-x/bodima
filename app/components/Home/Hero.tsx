import React from 'react'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <>
        <div className="flex flex-col items-center justify-center pb-10">
            <h1 className="text-6xl font-bold text-center w-4xl">Your next cozy stay is just a click away </h1>
        </div>
        <SearchBar/>
    </>
  )
}

export default Hero