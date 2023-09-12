import CardFliper from "./components/card-flip/cardFliper";
import CardCoin from "./components/Card/CardCoin";

import LottieLandingHandler from "./components/Lotties/LottieLandingHandler";
import Slider from "./components/Slider/Slider";
const plans =[
  {
    color:'light',
    title:'Basic',
    price:'25',
    priceType:String,
    description:[
      'Access to IRC Dashboard',
      'Notify with All importants',
      '24h Online Support',
      'Ultimate access to the News',
      '1-month of free shared Agent'
      
    ],
    icon:String,
    link:String,},
    {
      color:'Dark',
      title:'Professional',
      price:'45',
      priceType:String,
      description:[
        'Includes Basic +',
        'Shared Agent for seeding',
        'Access to the Articles Bank',
        'AI Based analyzer',
        '3-month of Free VIP Agent'
      ],
      icon:String,
      link:String,},
      {
        color:'light',
        title:'Advanced',
        price:'135',
        priceType:String,
        description:[
          'Includes Professional +',
          'VIP Agent',
          'VIP Markets news',
          'VIP Artificial OFFICE', 
          'VIP Access to Bloomberg'         
        ],
        icon:String,
        link:String,},
        
      
  ]

export default async function Home() {

  return (
    <div className="">
      <main className="p-4">
        <div
          className="
          w-full 
          relative 
          lg:h-80 
          md:max-lg:h-[300px]
          sm:max-md:h-[400px]
          max-sm:h-[570px]
          
          "
        >
          <div
            className="
              md:w-[800px] 
              absolute 
              max-sm:hidden          
              "
          >
            <LottieLandingHandler />
          </div>
          <div
            className="
              absolute 
              backdrop-blur-sm 
              bg-white/0  
              rounded-b-[40px] 
              pt-8 
              max-sm:backdrop-blur-none
              max-sm:rounded-xl 
              max-sm:shadow-xl 
             max-sm:shadow-blue-200
             max-sm:border-sky-100
              "
          >
            <p className="p-2 m-4  ">
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
        <h1 className=" text-3xl my-4">Worlds Top Ranking Coins:</h1>
        <div className="w-[95%] h-[480px] ">
          <CardCoin />
        </div>

        
        <div className="w-[95%] mt-8">
          <h1 className=" text-3xl my-4">Worlds Latest News:</h1>
          <Slider />
        </div>
        {/* <div>section 5 : last blog post</div> */}

        <div className="w-[95%] mt-8">
          <h1 className=" text-3xl my-4">Get your 30% Discounts:</h1>
            <CardFliper prop={plans} />
        </div>


      </main>
    </div>
  );
}
