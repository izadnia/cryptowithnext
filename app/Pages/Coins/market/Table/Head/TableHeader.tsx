import InfoBox from "@/app/components/InfoBox/InfoBox";
import React from "react";


function TableHeadTile({children}:{children:React.ReactNode}){
  return(
    <th className="p-2 items-center border-[1px] hover:bg-neutral-200 border-slate-300">
      {children}
    </th>
  )
}

export default function TableHeader({ data }: { data?: string }) {

  if (data == "id") {
    return null;
  } else if (data == "symbol") {
    return (
      <TableHeadTile>
        <InfoBox information="Coin Symbol" />
        <br />
        Sym
      </TableHeadTile>

    );
  } else if (data == "name") {
    return (
      <TableHeadTile>
        <br />
        Name
      </TableHeadTile>

    );
  } else if (data == "image") {
    return null;
  } else if (data == "current_price") {
    return (
      <TableHeadTile>
        <InfoBox
        style="w-72"
        information={`The price of Bitcoin (BTC) is calculated in real-time by aggregating the latest data across 219 exchanges and 5160 markets, using a global volume-weighted average formula..\n\nCurrent Prices all in USD $`} />
        <br />
        Price
      </TableHeadTile>

    );
  } else if (data == "market_cap") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-72"
          information={`Market Cap =\n\n Current Price x Circulating Supply\n\n Refers to the total market value of a cryptocurrency's circulating supply.\nIt is similar to the stock market's measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)`}
        />
        <br />
        Market C
      </TableHeadTile>

    );
  } else if (data == "market_cap_rank") {
    return (
      <TableHeadTile>
        <br />
        Rank
      </TableHeadTile>

    );
  } else if (data == "fully_diluted_valuation") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-72"
          information={`Fully Diluted Valuationn\n\nFDV = Current Price x Max Supply (or total supply if max supply is invalid)\n\nThe market capitalization (valuation) if the max supply of a coin is in circulation. Note that it can take 3, 5, 10 or more years before the FDV can be reached, depending on how the emission schedule is designed.`}
        />
        <br />
        FDV
      </TableHeadTile>

    );
  } else if (data == "total_volume") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-27"
          information={`Total Volume`}
        />
        <br />
        Total Vl
      </TableHeadTile>

    );
  } else if (data == "high_24h") {
    return (
      <TableHeadTile>
        <br />
        24h High
      </TableHeadTile>

    );
  } else if (data == "low_24h") {
    return (
      <TableHeadTile>
        <br />
        24h Low
      </TableHeadTile>

    );
  } else if (data == "price_change_24h") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-27"
          information={`price Change in 24h`}
        />
        <br />
        Price Change
      </TableHeadTile>

    );
  } else if (data == "price_change_percentage_24h") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-27"
          information={`price Change percentage in 24h`}
        />
        <br />
        PC %
      </TableHeadTile>

    );
  } else if (data == "market_cap_change_24h") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-27"
          information={`Market Cap Change in 24h`}
        />
        <br />
        MC 24h
      </TableHeadTile>

    );
  } else if (data == "market_cap_change_percentage_24h") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-35"
          information={`Market Cap Change Persentage in 24h`}
        />
        <br />
        MC %
      </TableHeadTile>

    );
  } else if (data == "circulating_supply") {
    return (
      <TableHeadTile>
        <InfoBox
          style="w-72"
          information={`The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).`}
        />
        <br />
        Circulating Supply
      </TableHeadTile>

    );
  }
   
  
  
  
  
  
  
  else {
    return <TableHeadTile>hi</TableHeadTile>;
  }
}
