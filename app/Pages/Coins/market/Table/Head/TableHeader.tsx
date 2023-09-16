import InfoBox from "@/app/components/InfoBox/InfoBox";


export default function TableHeader({ data }: { data?: string }) {
    if (data == "id") {
      return (
        <>
          <InfoBox information="Coin Id" />
          <br />
          ID
        </>
      );
    } else if (data == "symbol") {
      return (
        <>
          <InfoBox information="Coin Symbol" />
          <br />
          Sym
        </>
      );
    } else if (data == "name") {
      return (
        <>
          <InfoBox information="Coin Name" />
          <br />
          Name
        </>
      );
    } else if (data == "image") {
      return (
        <>
          <InfoBox information="Coin Official Image" />
          <br />
          Logo
        </>
      );
    } else if (data == "current_price") {
      return (
        <>
          <InfoBox information="Current Prices all in USD $" />
          <br />
          Price
        </>
      );
    } else if (data == "market_cap") {
      return (
        <>
          <InfoBox
            style="w-72"
            information={`Market Cap =\n\n Current Price x Circulating Supply\n\n Refers to the total market value of a cryptocurrency's circulating supply.\nIt is similar to the stock market's measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)`}
          />
          <br />
          Market C
        </>
      );
    } else if (data == "market_cap_rank") {
      return (
        <>
          <br />
          Rank
        </>
      );
    }
    else{
      return <>hi</>
    }
  }