'use client'

import axios from 'axios'



export default async function Home() {




const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en',
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
