import Image from "next/image"
import head2 from "../../public/assets/header2.png"
export default function AboutHero() {
  return (
    <div className="grid grid-cols-1  justify-center " >
      <div className=" items-center mt-20  ">
          <h1  className="mt-4 align-center     text-6xl  	text-center  font-bold font-serif  text-gray-1000   "
          >
          Ensuring Global Food
         </h1>
         <h1  className="mt-4 align-center     text-6xl  	text-center  font-bold font-serif  text-gray-1000   "
          >
           Security 
         </h1>
  
  <h1  className="mt-4 align-center  text-center  font-sans text-1xl tracking-tight text-gray-500  sm:mt-5  ">
  We engineer technologies to reduce post harvest loss for farmers, while improving the world’s access to high-quality commodities.    </h1>
   
    </div>
    
    </div>
  )
}