"use client";

import { default as axios } from "axios";
import React, { useRef, useEffect, useState, useCallback, CSSProperties } from "react";
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
  const [data, setData] = useState<Array<any> | undefined>([]);
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
  const CustomScroll:CSSProperties = {
    
  }
  return (
    <>
      {loaded ? (
        <AutoSizer>
          {({ height, width, data }: any) => (
              <List
                key={width}
                style={{ 
                  scrollSnapType: 'y',
                  scrollBehavior:'smooth',
                  scrollbarWidth:'thin',
                  msScrollbarTrackColor:'gray',
                  msScrollbarArrowColor:'darkgray',
                  scrollbarColor:'grey',
                  
                  
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
                    <div
                      key={data[index].id}
                      className="mt-8 p-2 m-2 w-[240px] rounded-xl shadow-xl duration-300 hover:cursor-pointer hover:scale-110 hover:bg-slate-400 hover:text-white "
                    >
                      <div className="flex py-4 my-4">
                        <div className="m-auto">
                          {
                            <Image
                              alt={data[index].name}
                              src={data[index].image}
                              width={50}
                              height={50}
                            />
                          }
                        </div>
                      </div>
                      <div className="flex p-4 my-4">
                        <p className="m-auto">{data[index].name}</p>
                      </div>

                      <div className="flex pt-8 mb-8">
                        <p className="m-auto">
                          Rank : {data[index].market_cap_rank}
                        </p>
                      </div>
                      <div className="flex py-2 my-2">
                        <p className="m-auto">{data[index].current_price} $</p>
                      </div>
                      <div className="flex py-2 my-2">
                        <div className="m-auto">
                          <GraphOfCoin coin={data[index].id} />
                        </div>
                      </div>
                      <div className="flex pt-8 mt-8">
                        <p className="m-auto"></p>
                      </div>
                    </div>
                  </div>
                )}
              </List>

          )}
        </AutoSizer>
      ) : 
      <div>
        <h1>Get to know about Market </h1>
        <p>click here</p>
      </div>
      
      }
    </>
  );
}

export default CartCoin;
