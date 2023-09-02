"use client";
import Image from "next/image";
import { default as axios } from "axios";
import { useEffect, useState } from "react";

type coinDataProps = [
  {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
  }
];

function CartCoin() {
  const [coinData, setCoinData] = useState<coinDataProps >([]);

  async function getWithAxios() {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setCoinData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWithAxios();
    console.log(coinData);
  }, []);

  return (
    <div className=" flex p-2 m-2 ">
      <div className=" p-2 m-2  rounded-xl w-1/3 shadow-xl  ">
        <div className="flex">
          <div className="m-auto"></div>
        </div>
        <div className="flex">
          <p className="m-auto">BitCoin</p>
        </div>
        <div className="flex">
          <p className="m-auto">Coin Price</p>
        </div>
        <div className="flex">
          <p className="m-auto">Coin graph</p>
        </div>
        <div className="flex">
          <p className="m-auto">MORE ????</p>
        </div>
      </div>
    </div>
  );
}

export default CartCoin;
