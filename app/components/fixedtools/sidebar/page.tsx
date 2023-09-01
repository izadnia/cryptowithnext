
import UserProfile from "./UserProfile";
import { SidebarContext } from "../page";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";
import { useContext, useEffect, useState } from "react";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "coins", icon: ArticleIcon, link: "/coins" },
  { id: 3, label: "Blog", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Academy", icon: VideosIcon, link: "/tutorials" },
];

function SideBar({ sideOpen }: any) {
  const segment = useSelectedLayoutSegment();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  console.log(isSidebarOpen);
  function handleItemClick() {
    setIsSidebarOpen(false);
  }

  return (
    <div
      className={`bg-slate-400  min-h-screen ${
        isSidebarOpen ? "w-[320px] duration-300 p-4" : "w-0 duration-700"
      }`}
    >
      <div className={isSidebarOpen ? "visible" : "hidden"}>
        <UserProfile login={true} username={"user"} />

        {menuItems.map(({ icon: Icon, ...menu }) => (
          <Link
            key={menu.id + menu.label}
            href={menu.link}
            onClick={handleItemClick}
          >
            <div
              className={`flex rounded-xl p-3 m-1 ${
                segment == menu.label ? "bg-slate-600 text-white" : null
              } ${
                segment == null && menu.label == "Home"
                  ? "bg-slate-600 text-white"
                  : null
              } hover:text-white hover:bg-slate-500`}
            >
              <div className="flex">
                <div style={{ width: "2.5rem" }}>
                  <Icon />
                </div>
                {
                  <span className="text-md font-medium text-text-light">
                    {menu.label}
                  </span>
                }
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
