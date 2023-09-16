import { coins } from "@/app/utils/coins";
import React from "react";
import TableBody from "./Body/TableBody";
import TableHeader from "./Head/TableHeader";

function TableOfCoins() {
  const tableHeaders = Object.keys(coins[0]);

  return (
    <table className=" w-full border-collapse border border-slate-400 ">
      <thead className="">
        <tr className="m-4">
          <th>
          </th>
          {tableHeaders.map((key) => (
            <TableHeader key={key} data={key} />
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <TableBody key={coin.symbol} coin={coin} />
        ))}
      </tbody>
    </table>
  );
}

export default TableOfCoins;
