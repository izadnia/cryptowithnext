'use client'

import axios from 'axios'



export default async function Home() {




const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'db9e5ffa7emsh574a701c4343428p1eb5efjsn7357e73becce',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

      </div>
      Hello world
    </main>
  );
}
