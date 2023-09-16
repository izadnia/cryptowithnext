"use client";

import { coins } from "@/app/utils/coins";
import TableBody from "./Table/Body/TableBody";
import TableHeader from "./Table/Head/TableHeader";

function CoinMarket() {
  const tableHeaders = Object.keys(coins[0]);

  return (
    <div className="w-full">
      <table className="w-full border-collapse border border-slate-400 ">
        <thead className="">
          <tr className="m-4">
            <th className="p-2 border-slate-300">
              <>
                <br />
                
              </>
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
    </div>
  );
}

export default CoinMarket;
