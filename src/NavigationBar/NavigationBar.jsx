import React from 'react'
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <nav className="bg-teal-950	 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start">

          <span className="text-xl font-semibold whitespace-nowrap"><Link to={`/`}>Should I Click This?</Link></span>
        </div>
        <div className="flex justify-end">
        <Link to={`/`} className="text-lg font-semibold whitespace-nowrap mr-4">Home</Link>
          <Link to={`/about`} className="text-lg font-semibold whitespace-nowrap">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
