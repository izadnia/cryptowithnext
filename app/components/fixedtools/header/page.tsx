"use client";
import { useContext, useState } from "react";
import ContainerDefault from "../../container/page";
import { SidebarContext } from "../page";

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
    <ContainerDefault>
      <button onClick={handleToggleSidebar}>
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>{" "}

      <div>search</div>
      <div>title</div>
    </ContainerDefault>
  );
}

export default Header;
