import Image from "next/image"
import head2 from "../../public/assets/header2.png"
import goal1 from "../../public/assets/goal1.png"
import goal2 from "../../public/assets/goal2.png"
import goal5 from "../../public/assets/goal5.png"
import goal8 from "../../public/assets/goal8.png"
import goal12 from "../../public/assets/goal12.png"
import goal13 from "../../public/assets/goal13.png"


export default function AboutMain() {
  return (
    <>
    <main className="bg-gradient-to-br   h-screen flex " style={{backgroundColor:"#FFFFFf"}}>
    <div class="flex-auto">
    <div class="relative" style={{marginTop:100}}>
    <div className="absolute top-1 mb-20 left-20 right-20">
        <Image    src={head2} alt=""/>
    </div>
   
</div>
  </div>
    </main>
    <main className="grid grid-cols-1  justify-center" style={{backgroundColor:"#FFFFFF"}}>
    <div className=" items-center mt-20  ">
          
         <h1  className="mt-40 align-center     text-4xl  	text-center  font-normal font-serif  text-gray-1000   "
          >
          Our Vision
         </h1>         
  
    <h1  className="mt-4 align-center mx-20  text-center  font-sans text-1xl tracking-tight text-gray-500  sm:mt-5  ">
  To build a global network of food supply that enables small and marginal farmers to sell produce across the world while ensuring that food never goes to waste.    
   </h1>
    </div>
    <div className=" items-center mt-20  ">
          <h1  className="mt-4 align-center     text-4xl  	text-center  font-normal font-serif  text-gray-1000   "
          >
          Our Mission
         </h1>         
  
    <h1  className="mt-4 align-center mx-20 justify-center  text-center  font-sans text-1xl tracking-tight text-gray-500  sm:mt-5  ">
    To become the most progressive and sustainable agriculture business enterprise powering the food supply chain in Africa and across the world through accessible, affordable and cutting-edge technology.
</h1>       
    </div>
  
    <div className="flex flex-row mt-10 mb-20 alin-center justify-center" >
      <div className="">
    <Image width={100} height={100}   src={goal1} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={100}   src={goal2} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={100}   src={goal5} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={100}   src={goal8} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={100}   src={goal12} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={100}   src={goal13} alt=""/>
    </div>

    </div>
    </main>
  </>
  )
}