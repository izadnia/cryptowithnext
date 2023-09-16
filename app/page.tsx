import CardFliper from "./components/card-flip/cardFliper";
import CardCoin from "./components/Card/CardCoin";
import ContainerComponents from "./components/container/ContainerComponents";
import Introduction from "./components/Introduction/Introduction";
import Slider from "./components/Slider/Slider";
import { plans } from "./utils/plans";



export default function Home() {
  return (
    <main>
      {/* section 1 : introduction */}
      <ContainerComponents titleSize="text-3xl" title="IRAN Crypto Hub">
        <Introduction />
      </ContainerComponents>

      {/* section 2 : List Of coins in Shape of Cards*/}
      <ContainerComponents titleSize="text-3xl" title="Worlds Top Ranking Coins:">
        <CardCoin />
      </ContainerComponents>

      {/* Section 3 : Slider Of Recent News  */}
      <ContainerComponents titleSize="text-3xl" title="Worlds Latest News:">
        <Slider />
      </ContainerComponents>

      {/* Section 4 : Plans of The company */}
      <ContainerComponents titleSize="text-3xl" title="Get your 30% Discounts:">
        <CardFliper prop={plans} />
      </ContainerComponents>

      {/* Section 5 : Latest Posts of The Academy Section  */}
      {/* | Men At Work !! | */}


    </main>
  );
}
