import Image from "next/image"
import hatman from "../../public/assets/hatman.png"
import start from "../../public/assets/start.png"
import optimization from "../../public/assets/optimization.png"
import local from "../../public/assets/local.png"
import global from "../../public/assets/global.png"
import flowerIn from "../../public/assets/flowerIn.png"
import FlowerUp from "../../public/assets/flowerUp.png"



export default function Values() {
  return (
    <>
   
    <main className="grid grid-cols-1 w-full  justify-center" style={{backgroundColor:"#FFFFFF"}}>
    <div className=" items-center mb-20  ">
          
         <h1  className="mt-10 align-center     text-4xl  	text-center  font-normal font-serif  text-gray-1000   "
          >
          Our Values
         </h1>         
  
    <h1  className="mt-4 align-center mx-20 mx-40  text-center  font-sans text-1xl text-[#07352E]   ">
    <span className="font-bold">We Have Soul!</span> We exist to supply the world with food. This makes us the <span className="font-bold"> soul </span> of the supply chain that connects all value chain players and stakeholders in a way works for them.   </h1>
    </div>
     
    <div className="flex flex-row mt-10 mb-20 ml-20 mr-20 items-stretch" >
      <div className="flex-column ">
    <Image width={50} height={50}   src={start} alt=""/>
    <div className="font-bold font-sans">S is for Start</div>
    <div className="font serif text-1xl">We start with the basics, and then build on that.</div>
    </div>
    <div className="mx-10 flex-column ">
    <Image width={50} height={50}   src={optimization} alt=""/>
    <div className="font-bold font-sans">O is for Optimization</div>
    <div className="font serif text-1xl">Make every supply chain as efficient as possible—becoming more productive and cost-effective.</div>
   
    </div>
    <div className="mx-10flex-column ">
    <Image width={50} height={50}   src={global} alt=""/>
    <div className="font-bold font-sans">U is for Universal</div>
    <div className="font serif text-1xl">All farmers deserve the same access to technology, tools, and information they need to succeed in their market.</div>
   
    </div>
    <div className="mx-10 flex-column ">
    <Image width={50} height={50}   src={local} alt=""/>
    <div className="font-bold font-sans">L is for Local</div>
    <div className="font serif text-1xl">Local farmers are best suited to the needs and demands of global markets, so we’ve made this for them!</div>
    </div>   

    </div>
    </main>
<main className=" mb-1 w-50    flex bg-[#F5FFF5]" >
    

<div className="flex mt-0 " style={{width:'60%', flexDirection:'column'}}>
<div className="mr-0 ml-auto"   >
      <Image src={FlowerUp} width={200} height={200} />   

  </div>


<div>
 <h3 className="mt-4 font-serif   font-bold leading-10 ml-20 mr-20  w-50 text-2xl tracking-tight  sm:leading-none ">
 We Need A Change
 </h3>
 <h6 className="mt-4 mr-20 ml-20 font-sans text-sm font-left  text-left leading-7  w-50   px-2  ">
 <ul class="list-disc ml-3 indent-2">
<li > Despite increasing pressures on food supply, about one-third of the total food produced for human consumption is wasted. </li>
<li >Smallscale farmers lack resources needed to comply with industry standards. Especially monitoring environmental and supply chain variables.</li>

<li>The quality of food products are not adequately maintained during primary production, processing, distribution & storage due to lack of neccesary infrastructure and technology.</li>

<li>post harvest storage services aren't accessible for most of these farmers. As a result, millions of tons of produce are lost due to poor storage. </li>
</ul>
</h6>
</div>

<div style={{position:'left', top:0, marginLeft:0, right:0}}>
    
    <Image src={flowerIn} width={200} style={{left:0}} height={200} />   
</div>

</div>
    <div class="flex-auto  md:max-w-2xl h-screen w-50 bg-blue">
    <div class="relative" >
    <div className="responsive top-0 right-0 h-screen" >
              <Image layout="fill"  src={hatman}    alt=""/>
    </div>
  
</div>
  </div>
 
    </main>

  </>
  )
}