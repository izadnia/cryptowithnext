import ContainerComponents from "@/app/components/container/ContainerComponents";
import CoinMarket from "./market/CoinMarket";

function Page() {
  return (
    <div>
      <ContainerComponents titleSize="text-2xl" title="Coins">
        <CoinMarket />
      </ContainerComponents>
    </div>
  );
}

export default Page;
