import CardFliper from "./components/card-flip/cardFliper";
import CardCoin from "./components/Card/CardCoin";
import Introduction from "./components/Introduction/Introduction";
import Slider from "./components/Slider/Slider";
const plans = [
  {
    color: "light",
    title: "Basic",
    price: "25",
    priceType: String,
    description: [
      "Access to IRC Dashboard",
      "Notify with All importants",
      "24h Online Support",
      "Ultimate access to the News",
      "1-month of free shared Agent",
    ],
    icon: String,
    link: String,
  },
  {
    color: "Dark",
    title: "Professional",
    price: "45",
    priceType: String,
    description: [
      "Includes Basic +",
      "Shared Agent for seeding",
      "Access to the Articles Bank",
      "AI Based analyzer",
      "3-month of Free VIP Agent",
    ],
    icon: String,
    link: String,
  },
  {
    color: "light",
    title: "Advanced",
    price: "135",
    priceType: String,
    description: [
      "Includes Professional +",
      "VIP Agent",
      "VIP Markets news",
      "VIP Artificial OFFICE",
      "VIP Access to Bloomberg",
    ],
    icon: String,
    link: String,
  },
];

function ContainerComponents({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-[95%] mt-8">
      <h1 className=" text-3xl my-4">{title}</h1>
      {children}
    </div>
  );
}

export default async function Home() {
  return (
    <div className="">
      <main className="p-4">

        {/* section 1 : introduction */}
        <ContainerComponents title="Iranian Crypto Hub">
          <Introduction />
        </ContainerComponents>
        

        {/* section 2 : List Of coins in Shape of Cards*/}
        <ContainerComponents title="Worlds Top Ranking Coins:">
          <CardCoin />
        </ContainerComponents>

        {/* Section 3 : Slider Of Recent News  */}
        <ContainerComponents title="Worlds Latest News:">
          <Slider />
        </ContainerComponents>

        {/* Section 4 : Plans of The company */}
        <ContainerComponents title="Get your 30% Discounts:">
          <CardFliper prop={plans} />
        </ContainerComponents>

        {/* Section 5 : Latest Posts of The Academy Section  */}
        {/* | Men At Work !! | */}

      </main>
    </div>
  );
}
