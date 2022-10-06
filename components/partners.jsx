import Image from "next/image"
import sterling from "../public/assets/sterling.png"
import afev from "../public/assets/afev.png"
import rana from "../public/assets/rana.png"
import partners from "../public/assets/partners.png"



export default function Partners() {
  return (
    <main className=" justify-center mx-2   flex  items-stretch" style={{backgroundColor:"#F5FFF5"}}>
      <div className=" items-center ">
  <h1  className="mt-4 align-center px-12  font-bold font-serif text-2xl tracking-tight text-gray-1000  sm:mt-5  ">
  Our  Trusted Partners
  </h1>
  
  <p  className="mt-4    font-sans text-1xl tracking-tight text-[#7C8684]  sm:mt-5  ">
    We’ve created bonds with companies that believe in Tarkin’s goals.  
    </p>
    <div className="flex flex-row mt-10 mb-20 " >
    {/*}  <div className="">
    <Image width={100} height={35}   src={afev} alt=""/>
    </div>
    <div className="mx-10">
    <Image width={100} height={40}   src={rana} alt=""/>
    </div>
    <div className="">
    <Image width={100} height={35}   src={sterling} alt=""/>
    </div>*/}

    <Image  src={partners} alt="" width={400} />
    </div>

    </div>
    </main>

  )
}