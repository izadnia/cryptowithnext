"use client";

import ContainerComponents from "@/app/components/container/ContainerComponents";
import TableOfCoins from "./Table/TableOfCoins";


function CoinMarket() {

  return (
    <ContainerComponents  title="coin">
      <TableOfCoins />
    </ContainerComponents>
  );
}

export default CoinMarket;
