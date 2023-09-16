"use client";


import InfoBox from "@/app/components/InfoBox/InfoBox";
import { coins } from "@/app/utils/coins";
import { MdInfoOutline } from "react-icons/md";

interface CoinProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: any;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: any;
  max_supply?: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: any;
  last_updated: string;
}


function TableDetail({
  text,
  TWstyle,
  image,
  children,
}: {
  text?: string;
  TWstyle?: string;
  image?: boolean;
  children: React.ReactNode;
}) {
  return <td className="p-2">{children}</td>;
}
function TableRow({ coin }: { coin: CoinProps }) {
  return (
    <tr>
      <TableDetail>{coin.id}</TableDetail>
      <TableDetail>{coin.symbol}</TableDetail>
      <TableDetail>{coin.name}</TableDetail>
      <TableDetail>{coin.symbol}</TableDetail>
      <TableDetail>{coin.current_price}</TableDetail>
      <TableDetail>{coin.market_cap}</TableDetail>
      <TableDetail>{coin.market_cap_rank}</TableDetail>
      <TableDetail>{coin.fully_diluted_valuation}</TableDetail>
      <TableDetail>{coin.total_volume}</TableDetail>
      <TableDetail>{coin.high_24h}</TableDetail>
      <TableDetail>{coin.low_24h}</TableDetail>
      <TableDetail>{coin.price_change_24h}</TableDetail>
      <TableDetail>{coin.price_change_percentage_24h}</TableDetail>
      <TableDetail>{coin.market_cap_change_24h}</TableDetail>
      <TableDetail>{coin.market_cap_change_percentage_24h}</TableDetail>
      <TableDetail>{coin.circulating_supply}</TableDetail>
      <TableDetail>{coin.total_supply}</TableDetail>
      <TableDetail>{coin.max_supply}</TableDetail>
      <TableDetail>{coin.ath}</TableDetail>
      <TableDetail>{coin.ath_change_percentage}</TableDetail>
      <TableDetail>{coin.ath_date}</TableDetail>
      <TableDetail>{coin.atl}</TableDetail>
      <TableDetail>{coin.atl_change_percentage}</TableDetail>
      <TableDetail>{coin.atl_date}</TableDetail>
      <TableDetail>{coin.last_updated}</TableDetail>
    </tr>
  );
}
function TableHeader({ data }: { data: string }) {
  if (data == "id") {
    return (
      <>
        <InfoBox information="Coin Id" />
        <br />
        ID
      </>
    );
  } else if (data == "symbol") {
    return (
      <>
        <InfoBox information="Coin Symbol" />
        <br />
        Sym
      </>
    );
  } else if (data == "name") {
    return (
      <>
        <InfoBox information="Coin Name" />
        <br />
        Name
      </>
    );
  } else if (data == "image") {
    return (
      <>
        <InfoBox information="Coin Official Image" />
        <br />
        Logo
      </>
    );
  } else if (data == "current_price") {
    return (
      <>
        <InfoBox information="Current Prices all in USD $" />
        <br />
        Price
      </>
    );
  } else if (data == "market_cap") {
    return (
      <>
        <InfoBox
          style="w-72"
          information={`Market Cap =\n\n Current Price x Circulating Supply\n\n Refers to the total market value of a cryptocurrency's circulating supply.\nIt is similar to the stock market's measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)`}
        />
        <br />
        Market C
      </>
    );
  } else if (data == "market_cap_rank") {
    return (
      <>
        <br />
        Rank
      </>
    );
  }
}

function CoinMarket() {
  
  const tableHeaders = Object.keys(coins[0]);


  return (
    <div className="w-full">
      <table className="w-full border-collapse border border-slate-400 ">
        <thead className="">
          <tr className="m-4">
            {tableHeaders.map((key) => (
              <th className="p-2 border-slate-300" key={key}>
                <TableHeader data={key} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinMarket;
