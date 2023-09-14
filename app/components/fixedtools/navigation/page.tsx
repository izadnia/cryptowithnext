"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

function Nav() {
  const segment = useSelectedLayoutSegments();
  return (
    <div className="flex p-4 justify-around">
      <div className="flex justify-start">
        {segment.length != 0 ? (
          <Link href={"/"}>
            <div
              className={`
              px-4 
              py-2 
              bg-zinc-500 
              text-slate-50 
              rounded-l-xl 
              hover:bg-sky-500
              `}
            >
              Home
            </div>
          </Link>
        ) : null}
        {segment.map((item, index) => {
          if (item !== "Pages") {
            const isLastItem = index === segment.length - 1;
            const itemClassName = `
                                    px-4
                                    py-2 
                                    bg-sky-700 
                                    text-slate-50 
                                    ${isLastItem ? "rounded-r-xl" : ""}
                                    hover:bg-sky-500
                                  `;
            return (
              <Link key={item} href={"/Pages/" + item}>
                <div className={itemClassName}>{item}</div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Nav;
