'use client'

import { useEffect, useState } from "react";

import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

import { default as axios } from "axios";


function GraphOfCoin(coinID: any) {
    const [transformedData, setTransformedData] = useState<any>([]);
    const [loaded, setLoaded] = useState(false);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    async function getMarketWithAxios() {
        const options = {
            method: "GET",
            url: `https://api.coingecko.com/api/v3/coins/${coinID.coin.toLowerCase()}/market_chart?vs_currency=usd&days=30&interval=daily&precision=1`,
        };

        try {
            const response = await axios.request(options);
            const transformed: any = response.data.prices.map(([time, price]: any) => ({ time, price }));
            setTransformedData(transformed);


        } catch (error) {
            console.error(error);
        }
    }

    function setRange(transformedData: [{ time: number; price: number; }]) {
        let maxNum = 0;
        let minNum = transformedData[0]?.price
        transformedData?.map(({ time, price }: { time: number; price: number; }) => {
            if (minNum >= price) {
                minNum = price

            }
            if (maxNum <= price) {
                maxNum = price
            }
        }), setMax(maxNum),
            setMin(minNum),
            setLoaded(true)
    }


    useEffect(() => {
        getMarketWithAxios().then
        setRange(transformedData)
    }, []);

    return (
        <div className="w-[150px] h-[150px]">
            {loaded ?
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={90} height={200} data={transformedData}>
                        <YAxis axisLine={false} tick={{ fill: 'green', fontSize: 12 }} type="number" domain={[min, max]} />
                        <Line type="natural" dot={false} dataKey={'price'} stroke="#111" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                : <p>loading</p>}
        </div>


    )

        ;
}

export default GraphOfCoin;
