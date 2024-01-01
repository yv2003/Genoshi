import React from "react";
// #066CD8,#40BCC8
import "../../App.css";
import { DefaultSidebar } from "../Sidebar/SideBar";
function PricePg() {
  return (
    // <div className="m-20px flex flex-row w-full h-full bg-[#0C0C1C] text-white">
    //   <DefaultSidebar />
      <div className="background p-20 max-h-full">
        <div className="flex flex-col justify-center items-center w-full h-full bg-[#0C0C1C]">
          <h1 className="text-center text-6xl pb-10 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
            CHOOSE A PLAN
          </h1>
          <div className="prices grid md:grid-cols-3 gap-10 justify-center  self-stretch">
            <div className="w-2/3 flex flex-col justify-center items-center bg-gray-200 text-black rounded-lg my-10 hover:shadow-cyan-500 ">
              <h2 className="text-center pt-10 px-5 pb-5 text-5xl sm:text-2xl">
                BASIC
              </h2>
              <p className="text-4xl font-bold text-center">$4</p>
              <p className="text-center text-lg sm:text-xl">per month</p>
              <button className="text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold">
                GET STARTED
              </button>
              <ul className="list-none  text-xl py-2 md:py-5">
                <h3 className="font-bold md:py-5">Features</h3>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 10 graphs</li>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 500 chatbot queries</li>
              </ul>
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center bg-gray-200 text-black rounded-lg px-10 my-10 hover:shadow-cyan-500">
              <h2 className="text-center pt-10 px-10 pb-5 text-5xl sm:text-2xl">
                PRO
              </h2>
              <p className="text-4xl font-bold text-center">$8</p>
              <p className="text-center text-lg">per month</p>
              <button className="text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold">
                GET STARTED
              </button>
              <ul className="list-none  text-xl py-2 md:py-5">
                <h3 className="font-bold md:py-5">Features</h3>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 10 graphs</li>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 500 chatbot queries</li>
              </ul>
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center bg-gray-200 text-black rounded-lg px-10 my-10 hover:shadow-cyan-500">
              <h2 className="text-center pt-10 px-10 pb-5 text-4xl sm:text-2xl">
                ENTERPRISE
              </h2>
              <p className="text-2xl text-center">
                Contact us for price details
              </p>
              {/* <p className="text-center text-lg">per month</p> */}
              <button className="text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold">
                Contact Us
              </button>
              <ul className="list-none  text-xl py-2 md:py-5">
                <h3 className="font-bold md:py-5">Features</h3>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 10 graphs</li>
                <li className="flex flex-row"><img src="./tick.svg" alt="" className="w-[25px] mr-4"/>Up to 500 chatbot queries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default PricePg;
