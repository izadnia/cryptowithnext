
import CartCoin from "./components/Cart/CartCoin";


import LottieLandingHandler from "./components/Lotties/LottieLandingHandler";

export default async function Home() {

  return (
    <div className="">
      <main className="p-4">
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <LottieLandingHandler />
          </div>
          <div className=" md:w-1/2  shadow-2xl  rounded-b-[40px] pt-8 rounded-t-[40px]">
            <p className="p-2 m-4 ">
              <span className="text-bold text-2xl ">
                Welcome to Iranian Crypto Hub
              </span>
              <br />
              <br />
              Your ultimate destination for cryptocurrency education,
              consulting, news, and valuable insights.Whether you&apos;re a
              beginner looking to understand the fundamentals of
              cryptocurrencies or an experienced investor seeking expert
              guidance, we&apos;ve got you covered. Explore our comprehensive
              resources, stay updated with the latest crypto news, and unlock
              the potential of digital currencies. Join our vibrant community
              and embark on an exciting journey into the world of
              cryptocurrencies.
            </p>
          </div>
        </div>
        <br />
        
        
        <div className="w-[95%] h-[450px]">
          {/* <Test /> */}
          <CartCoin />
        </div>
        
        
        
         <div>section 3 : investment plans</div>
        <div>section 4 : Blogs</div>
        <p className="">
          Welcome to IranianCryptoHub, your ultimate destination for
          cryptocurrency education, consulting, news, and valuable
          insights.Whether you&apos;re a beginner looking to understand the
          fundamentals of cryptocurrencies or an experienced investor seeking
          expert guidance, we&apos;ve got you covered. Explore our comprehensive
          resources, stay updated with the latest crypto news, and unlock the
          potential of digital currencies. Join our vibrant community and embark
          on an exciting journey into the world of cryptocurrencies.
        </p>
        <p className="">
          Welcome to IranianCryptoHub, your ultimate destination for
          cryptocurrency education, consulting, news, and valuable
          insights.Whether you&apos;re a beginner looking to understand the
          fundamentals of cryptocurrencies or an experienced investor seeking
          expert guidance, we&apos;ve got you covered. Explore our comprehensive
          resources, stay updated with the latest crypto news, and unlock the
          potential of digital currencies. Join our vibrant community and embark
          on an exciting journey into the world of cryptocurrencies.
        </p>
        <div>section 5 : last blog post</div> 
      </main>
    </div>
  );
}
