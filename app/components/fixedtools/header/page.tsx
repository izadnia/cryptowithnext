"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import ContainerDefault from "../../container/page";
import { SidebarContext } from "../page";

function MenuOpen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"


  
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

function MenuClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"


    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function Header() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarPinned,
    setIsSidebarPinned,
  } = useContext(SidebarContext);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex fixed z-50 top-0 justify-between w-screen bg-stone-200 px-6 py-2">
      <button className="" onClick={handleToggleSidebar}>
        {isSidebarOpen ? <MenuClose /> : <MenuOpen />}
      </button>

      <div></div>
      <div>
        <Image className="rounded-xl" width={130} height={24} alt={'loho'} src={'/images/logo.png'} />
      </div>
    </div>
  );
}

export default Header;
