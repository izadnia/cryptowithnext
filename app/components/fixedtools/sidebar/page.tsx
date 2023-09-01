"use client";

import UserProfile from "./UserProfile";

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

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "coins", icon: ArticleIcon, link: "/coins" },
  { id: 3, label: "Blog", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Academy", icon: VideosIcon, link: "/tutorials" },
];

function SideBar() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  return (
    <div className="bg-slate-400 w-[320px] min-h-screen p-4 ">
      <UserProfile login={true} username={"user"} />

      {menuItems.map(({ icon: Icon, ...menu }) => {
        return (
          <Link key={(menu.id)+menu.label} href={menu.link}>
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
        );
      })}
    </div>
  );
}

export default SideBar;
