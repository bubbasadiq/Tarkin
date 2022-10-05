import Image from "next/image"
import head2 from "../public/assets/fp.png"
import fp1 from "../public/assets/fp1.png"

export default function HeroSection() {
  return (
    <main className="bg-gradient-to-br   h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class=" mx-auto max-w-7xl "
         style={{
      backgroundImage: `url(${head2.src})`,
      width: '98vw',
      height: '100vh',
     
    }}>        
    </div>

          <div className="px-4 sm:px-6 sm:text-center md:max-w-3xl md:mx-auto lg:col-span-5 lg:text-left lg:flex lg:items-center lg:mt-16">
            <div>
              <h1 className="mt-4 text-6xl tracking-tight text-white  sm:mt-5 sm:leading-none lg:mt-6">
              Helping Farmers Build a Resilient Food Supply Chain
              </h1>
              <p className="mt-3 text-3xl text-base text-white sm:mt-5 lg:col-span-6 sm:text-xl lg:text-lg xl:text-xl">
              We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities.              </p>
              <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <button
                  type="button"
                  className="inline-flex items-center  bg-green-600 px-8 py-2 text-base rounded-sm font-medium text-white shadow-sm hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
          </div>
        </div>
      </div>
    </main>
  )
}