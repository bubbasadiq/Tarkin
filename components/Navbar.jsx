import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-16 lg:px-8" >
            <div className="flex h-16 items-center fixed bg-[#FFFFFF] mx-2"  style={{width:'100%',zIndex:100}}>
              <div className="flex flex-1 items-center space-between ">
                <div className="flex-shrink-0">
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
                <div className="hidden lg:ml-16 sm:block mx-10 " style={{marginLeft:'30vh'}}>
                  <div className="flex space-x-4 text-gray-500">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/" className="rounded-md px-3 py-2 text-md text-gray-500 font-medium ">
                      Home
                    </Link>
                   
                    <Link href="/about" className="rounded-md px-3 py-2 text-md font-medium text-white">
                      About Us
                    </Link>
                   
                    <Link href="/contact" className="rounded-md px-3 py-2 text-md font-medium text-white">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
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
                  Home
                </Link>
              </Disclosure.Button>
            
              <Disclosure.Button className="block">
                <Link href="/about" className="rounded-md px-3 py-2 text-md font-medium text-gray-600">
                  About Us
                </Link>
              </Disclosure.Button>
             
              <Disclosure.Button className="block">
                <Link href="/contact" className="rounded-md px-3 py-2 text-md font-medium text-gray-600">
                  Contact Us
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
