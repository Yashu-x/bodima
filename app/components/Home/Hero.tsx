import React from 'react'
import SearchBar, { SearchParams } from './SearchBar'
import img from "../../../public/home.png"

interface HeroProps {
  onSearch: (params: SearchParams) => void
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => (
    <div 
      className="h-[90.6%] bg-cover bg-no-repeat bg-top" 
      style={{ backgroundImage: `url(${img.src})` }}
    >
        <div className="flex flex-col items-center justify-center pb-5 pt-5">
            <h1 className="text-6xl font-bold text-center max-w-4xl leading-snug">Your next cozy stay is just a click away </h1>
        </div>
        <SearchBar onSearch={onSearch}/>
    </div>
)

export default Hero