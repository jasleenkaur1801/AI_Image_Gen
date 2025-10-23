import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt="Credits" />
              <p className="text-xm sm:text-sm font-medium text-gray-600">Credits left: 50</p>
            </button>
            <p className="font-medium">Hi, Jasleen</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow cursor-pointer"
                alt="Profile"
              />
              <div className="absolute hidden group-hover:block right-0 mt-3 w-28 bg-white shadow-lg rounded-lg z-20">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate('/buy')} className="cursor-pointer">
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
