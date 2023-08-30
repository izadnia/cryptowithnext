import Result from "@/node_modules/postcss/lib/result";
'use client'
export default async function Home() {
  const url =
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db9e5ffa7emsh574a701c4343428p1eb5efjsn7357e73becce",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {}
      </div>
      Hello world
    </main>
  );
}
