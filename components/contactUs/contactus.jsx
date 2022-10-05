import Image from "next/image"
import loc from "../../public/assets/location.png"
import mail from "../../public/assets/mail.png"
import call from "../../public/assets/call.png"

export default function ContactUs() {
  return (
    <>
        <main className=" justify-center    flex  items-stretch" style={{backgroundColor:"#FFFFFF"}}>
      <div className=" item-center mt-40 ">
    <h1  className="mt-4 align-center    font-bold font-serif text-6xl tracking-tight text-gray-1000  sm:mt-5  ">
         Contact Us
    </h1>
  
  <p  className="mt-4  text-sm align-center item-center  font-sans text-1xl tracking-tight text-gray-500  sm:mt-5  ">
  Have something to say to us? Feel free to send us a message.
      </p>
      </div>
</main>
      <div className="grid grid-cols-2 gap-1">
    <div className=" flex-column ml-20 w-50">
    <div className="flex flex-row mt-10 mb-20" >
    <div className="mx-0 mr-10">
    <label htmlFor="full-name" className="">
                Full Name
     </label>
              <input
              style={{width:250}}
                id="full-name"
                name="fullName"
                type="text"
                required
                className="w-full rounded-md border bg-transparent border px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                placeholder="Ali Damina"
              />
            

            </div>
            <div>
       <label htmlFor="email-address" className=" font-sans">
                Email address
     </label>
              <input
              style={{width:250}}
              id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border bg-transparent border px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                placeholder="Enter your email"
              />
            </div>
            
    <div>

    </div>
    </div>
    <div  className="mb-10">
    <label htmlFor="message" className=" font-sans">
        Message
     </label>
            <textarea  
          style={{width:550}}

                type="message"
                required
                className="w-full rounded-md border bg-transparent border   placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder=" message here"
              />
            </div>
            <button type="submit" class="bg-[#80CB7B] text-white hover:bg-[#80fB7B] p-3 py-3 w-20 ml-2 mb-10 rounded text-sm w-36">
                Submit
            </button>
            
    </div>

    <div className="flex flex-column mt-10 ml-20 mr-5 w-30">
         
    <div className=" mt-10 mb-20 alin-center justify-center" >
      <div className="flex w-50 mb-5">
    <Image width={50} height={50}   src={loc} alt=""/>
    <div className="flex-column ml-5">
    <div className="font-bold font-sans">Address</div>
    <div className="font serif text-sm text-1xl">24, New Dawaki Road, Off Isa Kaita Road,
Kaduna, Kaduna State. Nigeria </div>
    </div>
    </div>
    <div className="flex w-50 mb-5">
    <Image width={50} height={50}   src={call} alt=""/>
    <div className="flex-column ml-5">
    <div className="font-bold font-sans">Call us</div>
    <div className="font serif text-1xl">(234) 81 444 55 025</div>
    </div>
    </div>
    <div className="flex w-50 mb-5">
    <Image width={50} height={50}   src={mail} alt=""/>
    <div className="flex-column ml-5">
    <div className="font-bold font-sans">E-mail</div>
    <div className="font serif text-1xl">hello@tarkinonline.com</div>
    </div>
    </div>
   

    </div>
    </div>
    </div>
  </>
  )
}