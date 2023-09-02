"use client";

import axios from "axios";
import ContainerDefault from "./components/container/page";
import Footer from "./components/footer/page";

export default function Home() {
  // const options = {
  //   method: "GET",
  //   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <div className="w-full">
      <main className="p-4">
        <div>section 1 : image | welcome text</div>
        <div>section 2 : Carts of 3 coins</div>
        <div>section 3 : investment plans</div>
        <div>section 4 : Blogs</div>
        <div>section 5 : last blog post</div>
      </main>
      <Footer />
    </div>
  );
}
