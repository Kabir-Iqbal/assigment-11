"use client"
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
    const [showbarlinks , setshowbarlinks] = useState(false)

    const togglebutton =()=>{
        setshowbarlinks(!showbarlinks)
    }
    
  return (
     <nav className="bg-navbar">
      <div className="flex justify-around h-14 bg-navbar items-center  " >
        <div className="font-semibold">Preflux-Mart</div>
        <div className={` absolute gap-14 right-0 w-[50%] bg-navbar  top-[-1005%] h-[100%] pt-5 pl-4   md:static  md:w-auto  md:min-h-fit ${showbarlinks ? "top-[55px]"  : ""}    `}  >
        <ul className={`flex md:flex-row flex-col md:items-center cursor-pointer gap-8  `} >
           <a href="#"> <li>Home</li> </a>
           <a href="#"> <li>About</li> </a>
           <a href="#"> <li>Contact</li> </a>
        </ul>
        </div>
        <div  className="flex gap-5 items-center mr-2">
            <button type="button" className=" bg-shopnowcolor text-slate-700 font-semibold py-1 px-3 rounded-sm cursor-pointer" > Shop Now</button>
            {!showbarlinks ?
          <FaBars  className="md:hidden text-2xl" onClick={togglebutton} /> 
            :
          <IoCloseCircleOutline   className="md:hidden text-2xl" onClick={togglebutton}  /> 
           }
        </div>
      
      </div>
    </nav>
  )
}

export default Navbar
