"use client";
import SideBar from "./sidebar/page";
import Header from "./header/page";
import Nav from "./navigation/page";
import { useEffect, useState } from "react";

function FixedTools({ children }: any) {
  const [toggler, setToggler] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);

  useEffect(() => {
    // console.log("toggeler: ", toggler);
    if (toggler) {
      sideOpen ? setSideOpen(false) : setSideOpen(true);
    }
    // console.log("side: ", sideOpen);
    setToggler(false);
  }, [toggler]);

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full ">
        <Header setToggler={setToggler} />
      </div>
      <div className="flex w-full">
        <SideBar sideOpen={sideOpen} />
        <div className="w-full">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
}

export default FixedTools;
