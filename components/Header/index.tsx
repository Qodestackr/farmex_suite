"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import DashboardHelp from "../Dashboard/_components/DashboardHelp";
import SearchModal from "../Search/ModalSearch";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  isDashboard?: boolean;
}) => {

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const isAuthenticated = false

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-300"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "delay-400 !w-full"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-500"
                    }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-[0]"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-200"
                    }`}
                ></span>
              </span>
            </span>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>
        {props.isDashboard ? (
          <div className="hidden sm:block">
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <div>
              {
                searchModalOpen ? '' : (
                  <button
                  className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${
                     'bg-slate-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSearchModalOpen(true);
                  }}
                  aria-controls="search-modal"
                >
                  <span className="sr-only bg-success">Search</span>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="fill-current text-slate-500 dark:text-slate-400"
                      d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    />
                    <path
                      className="fill-current text-slate-400 dark:text-slate-500"
                      d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    />
                  </svg>
                </button>
                )
              }
              <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
            </div>
              {/* <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Type to search and press Enter..."
                  className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                />
              </div> */}
            </form>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Link href={'/'}>
              <h1 className="text-3xl font-semibold text-gray-600">Farmex Cloud</h1>
            </Link>
          </div>
        )
        }

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {
              props.isDashboard ? (
                <>
                  <DarkModeSwitcher />

                  <DropdownNotification />
                  <DropdownMessage />
                  <DashboardHelp />
                </>
              ) : (
                <ul className="flex items-center gap-2 2xsm:gap-4">
                  <li>
                    <Link href={'/pricing'}>
                      Pricing
                    </Link>
                  </li>
                  <li>Products(dropdown)</li>
                  <li>
                    <Link href={'/farmex-projects'}>
                      Farmex Projects
                    </Link>
                  </li>
                </ul>
              )
            }
          </ul>

          {
            props.isDashboard ? <DropdownUser /> : (
              <div className="flex gap-2 items-center">
                <Link
                  href="/consulatation-request"
                >
                  Talk to a Consultant
                </Link>

                <Link
                  href="/auth/signin"
                  className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-4 text-center text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-4 text-center  text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Sign Up
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </header>

    // <header>
    //   <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    //       <a href="/" className="flex items-center">
    //         <img src="/images/logo/logo.jpg" className="mr-3 h-12 sm:h-14" alt="Farmex Suite Logo" />
    //         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Farmex Suite</span>
    //       </a>
    //       <div className="flex justify-center items-center lg:order-2">
    //         <a href="#" className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
    //           Log in
    //         </a>
    //         <a href="#" className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
    //           Get started
    //         </a>
    //         <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
    //           <span className="sr-only">Open main menu</span>
    //           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //           <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //         </button>
    //         {/* <DarkModeSwitcher /> */}
    //       </div>
    //       <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
    //         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black" aria-current="page">Home</a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
    //           </li>
    //           <li>
    //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
    //           </li>
    //         </ul>

    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Header;
