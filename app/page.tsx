"use client";

import axios from "axios";
import ContainerDefault from "./components/container/page";
import Footer from "./components/footer/page";
import Lottie from "lottie-react"
import animationData from "./components/animationone.json"

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
    <div className="">
      <main className="p-4">
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <Lottie   animationData={animationData} />
            <Lottie   animationData={animationData} />
          </div>
          <div className=" md:w-1/2 border-lime-500 shadow-2xl border-[0.5px] rounded-b-[40px] rounded-t-[40px]">
            
            <p className="p-2 m-4">
              <span className="text-semibold">Welcome to IranianCryptoHub,</span><br/>
             your ultimate destination for cryptocurrency education, consulting, news, and valuable insights.Whether you&apos;re a beginner looking to understand the fundamentals of cryptocurrencies or an experienced investor seeking expert guidance, we&apos;ve got you covered. Explore our comprehensive resources, stay updated with the latest crypto news, and unlock the potential of digital currencies. Join our vibrant community and embark on an exciting journey into the world of cryptocurrencies.
            </p>
          </div>
        </div>
        <br />
        <div>section 2 : Carts of 3 coins</div>
        <div>section 3 : investment plans</div>
        <div>section 4 : Blogs</div>
        <p className="">
        Welcome to IranianCryptoHub, your ultimate destination for cryptocurrency education, consulting, news, and valuable insights.Whether you&apos;re a beginner looking to understand the fundamentals of cryptocurrencies or an experienced investor seeking expert guidance, we&apos;ve got you covered. Explore our comprehensive resources, stay updated with the latest crypto news, and unlock the potential of digital currencies. Join our vibrant community and embark on an exciting journey into the world of cryptocurrencies.
        </p>
        <p className="">
        Welcome to IranianCryptoHub, your ultimate destination for cryptocurrency education, consulting, news, and valuable insights.Whether you&apos;re a beginner looking to understand the fundamentals of cryptocurrencies or an experienced investor seeking expert guidance, we&apos;ve got you covered. Explore our comprehensive resources, stay updated with the latest crypto news, and unlock the potential of digital currencies. Join our vibrant community and embark on an exciting journey into the world of cryptocurrencies.
        </p>
        <div>section 5 : last blog post</div>
      </main>

    </div>
  );
}
