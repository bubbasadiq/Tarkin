import Image from "next/image"
import head2 from "../public/assets/fp.png"
import toplayer from "../public/assets/toplayer.png"
import { Button, Input } from "antd";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";

export default function HeroSection() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };

      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <main className="bg-gradient-to-br inline-block bg-gray-500  h-screen"   style={{
      backgroundImage: `url(${head2.src})`,
      width: '100vw',
      height: '97vh',     
    }}
    ref={pageHeader}
    >
      <Image src={toplayer} layout='fill' style={{ background: 'linear-gradient(101.59deg, #04201B 67.69%, rgba(7, 53, 46, 0) 144.58%)',
opacity: 0.4}}/>
      <div className="mx-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">       

          <div className="px-4 sm:px-6 sm:text-center md:max-w-3xl md:mx-auto lg:col-span-5 lg:text-left lg:flex lg:items-center lg:mt-16">
            <div>
              <h1 className="mt-4 text-6xl tracking-tight text-white  sm:mt-5 sm:leading-none lg:mt-6">
              Helping Farmers Build a Resilient Food Supply Chain
              </h1>
              <p className="mt-3 text-3xl text-base text-white sm:mt-5 lg:col-span-6 sm:text-xl lg:text-lg xl:text-xl">
              We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities.              </p>
              <div className="mt-5  w-full sm:mx-auto sm:max-w-lg lg:ml-0">
              <Button className="bg-green-600 px-2 text-[#FFFFFF] r-2 justify-center align-center"
              size="middle"
            >            
                Learn more  
             <ArrowRightOutlined className='mx-2 mt-auto  mb-3' />
            </Button>
              
              </div>
            </div>
          </div>
         
        </div>
      </div>   
    </main>
  )
}