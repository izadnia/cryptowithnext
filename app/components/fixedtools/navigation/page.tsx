'use client'
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

function Nav() {
  const segment = useSelectedLayoutSegments();
  console.log(segment);
  return (
    <div className=" p-4">
      <div className="flex justify-start">
        <Link href={"/"}>
          <div
            className={`
              px-4 
              py-2 
              bg-zinc-500 
              text-slate-50 
              rounded-r-xl 
              hover:bg-sky-500
              ${segment.length == 0 ? "rounded-l-xl" : null}
              `}
          >
            Home
          </div>
        </Link>
        {segment.map((item) => {
          if (item != "Pages") {
            return (
              <Link key={item} href={"/Pages/" + item}>
                <div
                  className="
                    px-4
                    py-2 
                    bg-sky-700 
                    text-slate-50 
                    rounded-l-xl 
                    hover:bg-sky-500
                    "
                >
                  {item}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Nav;
