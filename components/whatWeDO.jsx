import Image from "next/image"
import head2 from "../public/assets/header2.png"
import farming from "../public/assets/farming.png"
import silo from "../public/assets/silo.png"
import lady from "../public/assets/lady.png"

export default function WhatWeDo() {
  return (
    <>
    <main className="bg-gradient-to-br w-full  h-screen  flex" style={{backgroundColor:"#F5FFF5"}}>
    <div class="flex-auto w-50 ">
    <div class="relative" style={{marginTop:100}}>
    <div className="absolute top-1 left-0 ">
    <Image width={300} height={300}  src={silo} alt=""/>
    </div>
    <div class="cursor-pointer absolute top-10 left-20 mt-12 ml-20 w-50 hover:shadow-outline">
       <Image width={300} height={300}  src={farming} alt=""/>

    </div>
</div>
  </div>
  <div class="flex-auto w-50  ml-0 md:max-w-2xl sm:col-span-2 mt-40">
 
    <h1  className="mt-4 uppercase font-sans  w-50 text-1xl tracking-tight text-gray-400  sm:mt-5 sm:leading-none ">
    What does Tarkin do?
    </h1>
    <h3 className="mt-4 font-serif  w-50 text-2xl tracking-tight  sm:leading-none ">
    Solving the global food supply and security problems
    </h3>
    <h6 className="mt-4 mr-0 font-sans font-normal text-sm text-left leading-7 w-50  ">
    It’s common knowledge that smallholder farmers who produce 30% of total food consumed globally are extremely vulnerable to climate change, which increases the risk in agriculture finance significantly and many financial institutions simply stay away from the sector. These farmers are not credit worthy because they have no collateral therefore the value chain is disconnected and fragmented - commodity prices are volatile, and farmers don't get paid well.
  </h6>
  </div>
    </main>
    <main className="bg-gradient-to-br mb-10 mx-2   h-screen flex" style={{backgroundColor:"#FFFFFF"}}>
    <div class="flex-auto w-50 left-20  md:max-w-2xl sm:col-span-2 mt-40"> 
 
 <h3 className="mt-4 font-serif   font-bold leading-10 ml-20 mr-20  w-50 text-2xl tracking-tight  sm:leading-none ">
 We help you make profits while managing your farm inventory
 </h3>
 <h6 className="mt-4 mr-20 ml-20 font-sans font-left text-lg text-left leading-7 w-50   px-2     ">
 We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities. We are building a next generation technology company that's combining the best of software and hardware to tackle food loss and waste.
 </h6>
</div>
    <div class="flex-auto  md:max-w-2xl h-screen w-50 bg-blue">
    <div class="relative" >
    <div className="responsive top-0 right-0 bg-blue-500 h-screen" >
              <Image layout="fill"  src={lady}    alt=""/>
    </div>
  
</div>
  </div>
 
    </main>
  </>
  )
}