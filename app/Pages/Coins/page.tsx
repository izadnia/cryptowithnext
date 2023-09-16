import ContainerComponents from "@/app/components/container/ContainerComponents";
import CoinMarket from "./market/CoinMarket";

function Page() {
  return (
    
      <ContainerComponents titleSize="text-2xl" title="Coins">
        <CoinMarket />
      </ContainerComponents>
    
  );
}

export default Page;
