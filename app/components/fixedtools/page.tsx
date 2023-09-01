"use client";
import SideBar from "./sidebar/page";
import Header from "./header/page";
import Nav from "./navigation/page";
import { createContext, useEffect, useState } from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

function FixedTools({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <div className="flex flex-col h-screen">
        <div className="w-full ">
          <Header />
        </div>
        <div className="flex w-full">
          <SideBar />
          <div className="w-full">
            <Nav />
            {children}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}

export default FixedTools;
