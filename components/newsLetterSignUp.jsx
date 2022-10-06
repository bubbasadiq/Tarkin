import Image from "next/image"
import sterling from "../public/assets/sterling.png"
import afev from "../public/assets/afev.png"
import rana from "../public/assets/rana.png"



export default function NewsLetter() {
  return (
    <main className=" justify-left  space-between  flex  items-stretch" style={{backgroundColor:"#E9FFE8"}}>
      <div className=" items-center ml-20 ">
  <h1  className="mt-4 align-center py-12  font-bold font-serif text-1xl tracking-tight text-gray-1000  sm:mt-5  ">
  Stay updated with our weekly newsletter  </h1>
    </div>
    <div className="flex-column py-12 ml-auto mr-20">
      <div>
      <label >Email Address</label>
      </div>
      <div className="row">
      <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="bg-transparent  rounded-md border border-[#80CB7B]  py-3 placeholder-gray-500 w-96 "
                placeholder="feliciaarid@gmail.com"
              />
              
      <button type="submit" class="bg-[#80CB7B] text-white hover:bg-[#80fB7B] p-3 py-3 w-20 ml-2 rounded text-sm w-40">        
        Sign Up</button>
        </div>
    </div>
    </main>

  )
}