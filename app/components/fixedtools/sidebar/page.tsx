"use client";
import UserProfile from "./UserProfile";
import { SidebarContext } from "../page";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  ArticleIcon,
  HomeIcon,
  UsersIcon,
  VideosIcon,
  PinIcon,
  NightIcon,
  DayIcon,
} from "./icons";
import { useContext, useEffect, useState } from "react";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "coins", icon: ArticleIcon, link: "/Pages/Coins" },
  { id: 3, label: "Blog", icon: UsersIcon, link: "/Pages/Blog" },
  { id: 4, label: "Academy", icon: VideosIcon, link: "/Pages/Academy" },
];

function SideBar({ sideOpen }: any) {
  const segment = useSelectedLayoutSegment();
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarPinned,
    setIsSidebarPinned,
  } = useContext(SidebarContext);

  const handleItemClick = () => {
    if (!isSidebarPinned) {
      setIsSidebarOpen(false);
    }
  };
  const handleTogglePin = () => {
    setIsSidebarPinned(!isSidebarPinned);
  };

  return (
    <div
      className={`bg-slate-700 bg-opacity-40 backdrop-blur-sm shadow-2xl fixed min-h-full ${
        isSidebarOpen ? "w-[320px] duration-300 p-4" : "w-0 duration-700"
      }`}
    >
      <div className={isSidebarOpen ? "visible" : "hidden"}>
        <div className="flex justify-end mb-3 ">

          <div
            onClick={handleTogglePin}
            className={`justify-left cursor-pointer w-10 hover:bg-slate-500 ${
              isSidebarPinned
                ? "bg-slate-600  rounded-xl p-2"
                : " rounded-xl p-2"
            }`}
          >
            <PinIcon />
          </div>
        </div>
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
