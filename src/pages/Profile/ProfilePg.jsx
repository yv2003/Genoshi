import React from "react";
import "../../App.css";
import { DefaultSidebar } from "../Sidebar/SideBar";

function ProfilePg() {
  return (
    <div className="m-20px flex flex-row w-full h-full bg-[#0C0C1C] text-white">
      <DefaultSidebar />
      <div className="background">
        <p className="p-4 text-3xl">MY PROFILE</p>
        <div className="flex flex-col md:flex-row m">
        <button className="flex flex-row items-center text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold md:mx-10"><img src="./plus.svg" alt="" className="w-[20px] mr-4" />CREATE NEW GRAPH</button>
        <button className="flex flex-row items-center text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold md:mx-10"><img src="./share.svg" alt="" className="w-[20px] mr-4"/>SHARE GRAPH</button>
          <button className="flex flex-row items-center text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold md:mx-10"><img src="./upload.svg" alt="" className="w-[20px] mr-4" />UPLOAD GRAPH</button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
        <img src="./pfp.jpg" alt="pfp" width="100px" className="rounded-full p-4" />
        <div className="p-data">
          <p>Name: YASHASVI VAIDYA</p>
          <p>Email: yash.vi@gmail.com</p>
          <p>Account Type: Free Trail</p>
          </div></div>
        <button className="flex flex-row items-center text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold md:mx-10">Edit profile</button>
          
      </div>
      <p className="pl-10 text-xl">Usage Metrics</p>
      <div className="grid grid-cols-3 w-50 text-black p-4">
        <div className="created bg-white rounded-lg mx-2 p-4 flex flex-col justify-center items-center">
          <img src="./grph.svg" alt="nm" width="100px" className=" " />
            <p className=""> Graphs Created</p>
            <p className="">3</p>
        </div>
        <div className="shared bg-white rounded-lg mx-2 p-4 flex flex-col justify-center items-center">
          <img src="./share.svg" alt="nm" width="100px" />
            <p className="text-center">Graphs Shared</p>
            <p className="text-center">7</p>
        </div>
        <div className="papers bg-white rounded-lg mx-2 p-4 flex flex-col justify-center items-center">
          <img src="./papers.svg" alt="nm" width="100px" />
            <p className="text-center">Papers Created</p>
            <p className="text-center">10</p>
        </div>
        </div>
        <div className="px-8 text-xl">RECENT ACTIVITY FEED</div>
        <p className="px-8 text-xl">Favourites & Collections</p>
        <div className="px-8 pb-10 text-xl flex flex-row ">
          <div className="flex flex-col items-center align-center"><img src="./graph.jpg" alt="" className="w-[100px] border-4 rounded-lg m-4" />Graph1</div>
          <div className="flex flex-col items-center align-center"><img src="./graph.jpg" alt="" className="w-[100px] border-4 rounded-lg m-4" />Graph2</div>
          <div className="flex flex-col items-center align-center"><img src="./graph.jpg" alt="" className="w-[100px] border-4 rounded-lg m-4" />Graph3</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePg;
