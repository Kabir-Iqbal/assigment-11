import Image from "next/image"
import Navbar from "./components/navbar"

const Card = () => {
  return (
    <>
      
     <Navbar /> 
    <div className="flex flex-col sm:flex-row gap-3 justify-around w-[80%] mx-auto  my-3 mt-32  sm:w-[85%] sm:flex-wrap sm:gap-4 md:flex-row md:w-[98%]  " >
    
      {/* 1 card */}
      <div className="border-slate-300 border-[1px] w-full    sm:w-5/12   md:w-3/12 ">
        <div className="flex justify-center my-2" >
        <Image src="/images/lancome.webp" alt="perfume-pic" 
        width={270}
        height={300}
         className="h-48 "
        /></div>
        <p className="text-center py-2 text-pricecolor font-bold">Lancome</p>
        <p className="text-center" >250$</p>
        <div className="flex justify-center">
        <button type="button" className=" text-center my-5 py-1 mt-7 rounded-sm text-white w-36 bg-buttoncolor">Buy Now</button>
        </div>
      </div>
      

{/* 2 card */}
      <div className="border-slate-300 border-[1px] w-full  sm:w-5/12  md:w-3/12  ">
        <div className="flex justify-center my-2" >
        <Image src="/images/boss.jpg" alt="perfume-pic" 
        width={270}
        height={300}
        className="h-48"
        />
        </div>
        <p className="text-center py-2 text-pricecolor font-bold ">Boss</p>
        <p className="text-center" >250$</p>
        <div className="flex justify-center">
        <button type="button" className=" text-center my-5 py-1 rounded-sm  text-white w-36 bg-buttoncolor">Buy Now</button>
        </div>
      </div>

{/* 3 */}
      <div className="border-slate-300 border-[1px] w-full   sm:w-5/12   md:w-3/12 ">
        <div className="flex justify-center my-2" >
        <Image src="/images/black.webp" alt="perfume-pic" 
        width={270}
        height={100}
        className="h-48"
        />
        </div>
        <p className="text-center text-pricecolor py-2 text- font-bold"> JAGUAR BLACK</p>
        <p className="text-center" >250$</p>
        <div className="flex justify-center">
        <button type="button" className=" text-center my-5 rounded-sm py-1 mt-8 text-white w-36 bg-buttoncolor">Buy Now</button>
        </div>
      </div>
     

      
    </div>
    </>
    
  )
}

export default Card
