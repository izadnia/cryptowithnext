
import React from "react";
import TableDetail from "../Detail/TableDetail";

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

function TableBody({ coin }: { coin: CoinProps }) {
  return (
    <tr>
      <TableDetail image={true} text={coin.image} TWstyle=" w-full sticky bg-slate-400 -left-1 top-14" >{null}</TableDetail>
      <TableDetail TWstyle="sticky bg-white left-14 top-14 rounded-r-2xl bg-slate-400 text-white">{coin.symbol}</TableDetail>
      <TableDetail>{coin.name}</TableDetail>
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

export default TableBody;
