import Image from "next/image"
import scroll from "../public/assets/scroll.png"
import farming from "../public/assets/farming.png"
import silo from "../public/assets/silo.png"
import lady from "../public/assets/lady.png"
import FlowerUp from "../public/assets/flowerUp.png"
import flowerIn from "../public/assets/flowerIn.png"



export default function WhatWeDo() {
  return (
    <>
    <div style={{backgroundColor:"#F5FFF5",  marginLeft:'auto', margin:'auto', textAlign:'center'}} >
      <div className="row">
        
         <Image src={scroll} alt='' width={'120px'}/>
        
          
      </div>
    </div>
    <main className="w-full    flex" style={{backgroundColor:"#F5FFF5"}}>
    <div class="flex-auto w-50 ml-20 ">
    <div class="relative" style={{marginTop:100}}>
    <div className="absolute top-1 left-auto right-10 ">
    <Image width={400} height={400}  src={silo} alt=""/>
    </div>
    <div class="cursor-pointer absolute top-10 left-auto right-0 mt-12 ml-20 w-50 hover:shadow-outline">
       <Image width={400} height={400}  src={farming} alt=""/>

    </div>
</div>
  </div>
  <div class="flex-auto w-80  ml-28 mr-10 mt-40 ">
 
    <h1  className="mt-4 uppercase font-sans  w-60 text-1xl tracking-tight text-gray-400  ">
    What does Tarkin do?
    </h1>
    <h3 className="mt-4 font-serif   text-2xl  ">
    Solving the global food supply and security problems
    </h3>
    <h6 className="mt-4 mr-0 font-sans font-normal text-sm text-left leading-7 w-2/3  ">
    It’s common knowledge that smallholder farmers who produce 30% of total food consumed globally are extremely vulnerable to climate change, which increases the risk in agriculture finance significantly and many financial institutions simply stay away from the sector. These farmers are not credit worthy because they have no collateral therefore the value chain is disconnected and fragmented - commodity prices are volatile, and farmers don't get paid well.
  </h6>
  </div>
    </main>
  <main className=" mb-10 w-full    flex" style={{backgroundColor:"#FFFFFF"}}>
    <div className="flex mt-0 " style={{width:'60%', flexDirection:'column'}}>
      <div className="mr-0 ml-auto"   >
      <Image src={FlowerUp} width={200} height={200} />   

      </div>
   <div  className="  ml-32">
    <h3 className="mt-4 font-serif   font-bold  w-96 text-2xl  " style={{width: '70%'}}>
    We help you make profits while managing your farm inventory
    </h3>
    <h6 className="mt-4 mr-0 font-sans font-normal text-sm text-left leading-7   " style={{width: '90%'}}>
    We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities. We are building a next generation technology company that's combining the best of software and hardware to tackle food loss and waste.  </h6>
 </div>
 <div style={{position:'left'}}>
    
    <Image src={flowerIn} width={200} style={{left:0, bottom:0}} height={200} />   
</div>

</div>
<div class="flex-auto relative w-1/2  ml-50 mr-0 mt-0 bg-blue-500 " style={{width:'40%'}}>

<Image layout="fill"  src={lady}    alt=""/>

  </div>
 
    </main>
  </>
  )
}