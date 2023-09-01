'use client'
import { useContext, useState } from "react";
import ContainerDefault from "../../container/page";
import { SidebarContext } from "../page";

function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ContainerDefault>
      <div onClick={handleToggleSidebar}>sideToggler</div>
      <div>search</div>
      <div>title</div>
    </ContainerDefault>
  );
}

export default Header;
