import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="container pt-6">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" width={50} height={50} alt="logo" className="relative left-16 top-4"/>
          
          <p className="relative md:flex text-[25px] right-96 top-5 font-light">Syeda's</p>
          
          <ul className="relative md:flex hidden gap-8 items-center font-semibold text-[14px] right-20 top-6">
            <li className="hover:underline hover:decoration-green-700">Home</li>
            <li className="hover:underline hover:decoration-green-700">About</li>
            <li className="hover:underline hover:decoration-green-700">Food</li>
            <li className="hover:underline hover:decoration-green-700">Dish</li>
            <li className="hover:underline hover:decoration-green-700" >Contact</li>
            <button className="bg-accent text-white px-6 py-2 rounded-3xl hover:bg-green-700">SignUp</button>
          </ul>
          <AiOutlineMenu className="md:hidden text-accent" size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
