import Image from "next/image"
import head2 from "../public/assets/header2.png"
import farming from "../public/assets/farming.png"
import silo from "../public/assets/silo.png"
import man from "../public/assets/man.png"
import phone from "../public/assets/phone.png"
import analysis from "../public/assets/analysis.png"
import chart from "../public/assets/chart.png"
import tools from "../public/assets/tools.png"




export default function WhyUS() {
  return (
    <>
    <main className="bg-gradient-to-br mx-2  h-screen flex" style={{backgroundColor:"#FFFFFF"}}>
    <div class="flex-auto w-50 bg-blue">
    <div class="relative" style={{marginTop:50}}>
    <div class="cursor-pointer absolute top-10 left-20 mt-12 ml-20 w-50 hover:shadow-outline">
              <Image width={300} height={400}  src={man} alt=""/>
    </div>
   
</div>
  </div>
  <div class="flex-auto w-50  md:max-w-2xl sm:col-span-2 mt-40">
 
    <h1  className="mt-4 uppercase font-sans mr-20  w-50 text-1xl tracking-tight text-gray-1000  sm:mt-5 sm:leading-none ">
    WHY CHOOSE TARKIN?
    </h1>
    <h3 className="mt-4 font-serif font-bold leading-10  w-50 text-2xl text-lg tracking-tight  sm:leading-none ">
    We provide the neccessary service to maximise the value of their commodities
    </h3>
    <div className="flex flex-row mt-5" >
    <Image width={10} height={15}   src={phone} alt=""/>
    <h1  className=" font-normal ml-10 text-sm leading-2 font-sans mr-10  w-50 text-1xl tracking-tight     ">
    <span className="font-bold"> Use </span>digital technology to improve market information for farmers so that they have more choices
    </h1>
    </div>
    <div className="flex flex-row mt-5" >
    <Image width={10} height={15}   src={analysis} alt=""/>
    <h1  className=" font-normal ml-10  text-sm leading-2 font-sans mr-10  w-50 text-1xl tracking-tight     ">
     <span className="font-bold">Increase </span> ability of smallholder farmers to sell to larger markets that are naturally beyond their reach
    </h1>
    </div>
    <div className="flex flex-row mt-5" >
    <Image width={10} height={15}   src={chart} alt=""/>
    <h1  className=" font-normal ml-10  text-sm leading-2 font-sans mr-10  w-50 text-1xl tracking-tight     ">
    <span className="font-bold">     Provide </span>  technical services like grain analysis, standardization and tracking
    </h1>
    </div>
    <div className="flex flex-row mt-5" >
    <Image width={10} height={15}   src={tools} alt=""/>
    <h1  className=" font-normal ml-10  text-sm leading-2 font-sans mr-10  w-50 text-1xl tracking-tight     ">
     <span className="font-bold">Build</span> integrated storage solutions to track provenance for supply chain optimization & grading
     </h1>
    </div>
  </div>
    </main>

  </>
  )
}