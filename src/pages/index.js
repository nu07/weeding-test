import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [

];
const supportLinks = [
  {
    name: "1",
    imgLocation: "/img/1.jpg",
  },
  {
    name: "2",
    imgLocation: "/img/2.jpg",
  },
  {
    name: "3",
    imgLocation: "/img/3.jpg",
  },
];



export default function Example() {
  return (
    <div className="bg-white">
      <header className="relative pb-36 bg-blue-gray-400">
        <div className="absolute inset-0">
          <Image
            width="500"
            height="500"
            className="w-full h-full object-cover"
            src="/img/4.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <Image
                    width="500"
                    height="500"
                    src="/img/logo.jpg"
                    className="h-8 w-auto sm:h-10"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="bg-blue-gray-900 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 lg:flex lg:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-blue-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="py-2 px-6 bg-blue-500 border border-transparent rounded-md shadow-md text-base font-medium text-white hover:bg-blue-600"
              >
                Login
              </a>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
            >
              <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image
                      width="500"
                      height="500"
                      className="h-8 w-auto"
                      src="/img/logo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-gray-400 hover:bg-blue-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-blue-gray-900 hover:bg-blue-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </header>

      <main>
        <div className="bg-blue-gray-50">
          {/* Cards */}
          <section
            className="md:-mt-32  -mt-28 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {supportLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col bg-white rounded-2xl shadow-xl"
                >
                  <Image
                    width="500"
                    height="500"
                    className="rounded-lg"
                    alt="bagus"
                    src={link.imgLocation}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
            aria-labelledby="faq-heading"
          >
            <div className="flex justify-center items-center">
              <h2
                className="text-3xl font-extrabold text-blue-gray-900"
                id="faq-heading"
              >
                Videos From US
              </h2>
            </div>
            <div className="mt-6 pt-10">
              <dl className="">
                <div className="w-full h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/n9ugzpGWeic"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </dl>
            </div>
          </section>
        </div>

    

        {/* Newsletter Section */}
       
      </main>

     
    </div>
  );
}
