import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useState } from 'react';


export default function HomeNavBar() {
  const [navbarColor, setNavbarColor] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [acctType, setActType] = useState('')
  const [login, setLogin] = useState(false)
  const [site, setSite] =useState('')

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor(false);
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor(true);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  let transparent1 = "red"
  let transparent = `linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.0002) 119.59%)`
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full " >
            <div className="flex h-16 items-center fixed" style={{width:'100%',zIndex:100, backgroundColor: !navbarColor?transparent:transparent, backdropFilter: "blur(4px)"}}>
              <div className="flex  flex-1 items-center space-between ">
                <div className="flex-shrink-0 ml-12">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.svg"
                    alt="Tarkin logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.svg"
                    alt="Tarkin logo"
                  />
                </div>
                <div className="hidden  sm:block " style={{marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>
                  <div className="flex space-x-4 text-center justify-center alingn-center text-white">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/" className="rounded-md px-3 py-2 text-md text-white font-medium ">
                      HOME 
                    </Link>
                   
                    <Link href="/about" className="rounded-md px-3 py-2 text-md font-medium text-white">
                      ABOUT US
                    </Link>
                   
                    <Link href="/contact" className="rounded-md px-3 py-2 text-md font-medium text-white">
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden" style={{zIndex:100}}>
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
                <Link href="/">
                  HOME
                </Link>
              </Disclosure.Button>
                        
              <Disclosure.Button className="block">
                <Link href="/about" className="rounded-md px-3 py-2 text-md font-medium text-gray-600">
                  ABOUT US
                </Link>
              </Disclosure.Button>
              <Disclosure.Button className="block">
                <Link href="/contact" className="rounded-md px-3 py-2 text-md font-medium text-gray-600">
                  CONTACT US
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
