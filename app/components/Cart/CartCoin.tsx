"use client";

import { default as axios } from "axios";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  CSSProperties,
} from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Image from "next/image";
import GraphOfCoin from "../graph/GraphOfCoin";

type coinDataProps = {
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
};

function CartCoin() {
  const [data, setData] = useState<any | null>(null);
  const [loaded, setloaded] = useState(false);
  async function getMarketWithAxios() {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
      console.log(data);
      setloaded(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMarketWithAxios();
  }, []);
  const CustomScroll: CSSProperties = {};
  return (
    <>
      {loaded ? (
        <AutoSizer>
          {({ height, width }: any) => (
            <List
              key={width}
              style={{
                scrollSnapType: "y",
                scrollBehavior: "smooth",
                scrollbarWidth: "thin",
              }}
              direction="horizontal"
              className="List"
              height={height}
              itemCount={data.length}
              itemSize={280}
              width={width}
            >
              {({ index, style }: any) => (
                <div key={index} style={style}>
                  <div id="coin-Section"
                    key={data[index]?.id}
                    className="
                        
                        p-4 
                        m-2 
                        w-[240px] 
                        border-[1px]
                        rounded-xl 
                        shadow-xl 
                        shadow-blue-200
                        border-sky-100
                        duration-300 
                        hover:cursor-pointer 
                        hover:scale-105 
                        hover:bg-sky-100 
                        items-center
                        justify-around
                        flex
                        flex-col
                        "
                  >
                    <Image
                      alt={data[index]?.name}
                      src={data[index]?.image}
                      width={50}
                      height={50}
                    />
                    <p id="coin-name"
                      className="
                        m-auto
                      "
                    >
                      {data[index]?.name}
                    </p>
                    <p id="coinRank"
                      className="
                        pt-2 
                        mb-2 
                        text-sky-800
                    "
                    >
                      Rank : {data[index]?.market_cap_rank}
                    </p>
                    <p id="coin-price" 
                      className="
                        text-xl
                        font-semibold
                      ">
                       {data[index]?.current_price} $
                    </p>
                    <p id="coin-highest-24h" 
                      className="
                        text-green-800
                      ">
                       + : {data[index]?.high_24h} $
                    </p>
                    <p id="coin-lowest-24h" 
                      className="
                        text-red-700
                      ">
                       - : {data[index]?.low_24h} $
                    </p>
                    <p id="coin-percentage-change" 
                      className="
                        text-amber-900
                      ">
                       % : {data[index]?.price_change_percentage_24h}
                    </p>
                    <p id="coin-symbol" 
                      className="
                       text-xs
                       font-semibold
                      ">
                       {data[index]?.symbol}
                    </p>
                    <GraphOfCoin 
                      coin={data[index]?.id} />
                    </div>
                  </div>
              )}
            </List>
          )}
        </AutoSizer>
      ) : (
        <div>
          <h1>Get to know about Market </h1>
          <p>click here</p>
        </div>
      )}
    </>
  );
}

export default CartCoin;
