import { coins } from "@/app/utils/coins";
import React from "react";
import TableBody from "./Body/TableBody";
import TableHeader from "./Head/TableHeader";

function TableOfCoins() {
  const tableHeaders = Object.keys(coins[0]);

  return (
    <div className="h-[28rem] overflow-scroll">
      <table className="relative w-full  ">
        <thead className="w-full sticky bg-white -top-1">
          <tr className="">
            <th className={`p-1 items-center  hover:bg-neutral-200`}><br/>Avatar</th>
            {tableHeaders.map((key) => (
              <TableHeader key={key} data={key} />
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {coins.map((coin) => (
            <TableBody key={coin.symbol} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableOfCoins;
