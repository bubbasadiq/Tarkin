import Image from "next/image"
import sterling from "../public/assets/sterling.png"
import afev from "../public/assets/afev.png"
import rana from "../public/assets/rana.png"
import Accordion from "./accordion"



export default function Faq() {

    let faq = [
        {
        title:"Can I join Tarkin’s team?",
        content:"Yes, you can. Kindly head to our careers page for open positions, or you can simply send us an email containing your CV and we would get back to you if there’s an available role that fits your qualification."
       },
       {
        title:"Is Tarkin a Software only Company?",
        content:""
       },
       {
        title:"Is Tarkin a bank",
        content:""
       }
    
    ]
  return (
    <main className=" justify-left ml-20    flex  items-stretch" style={{backgroundColor:"#FFFFFF"}}>
      <div className=" items-left ">
  <h1  className="mt-4 align-center   font-bold font-serif text-2xl tracking-tight text-gray-1000  sm:mt-5  ">
  FAQs
  </h1>
  
  <p  className="mt-4    font-sans text-1xl tracking-tight   sm:mt-5  ">
  Need answers? Find them here...  
    </p>
    <div className="mt-10 ">
    {faq.map((e,i)=><>
    <Accordion key={i} title={e.title} content={e.content} /> 
    <div style={{width:'100vh'}}>
    <hr/>
    </div>
    </>)}
    </div>
   
    </div>
    </main>

  )
}