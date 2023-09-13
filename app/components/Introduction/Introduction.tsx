import LottieLandingHandler from "../Lotties/LottieLandingHandler";

function Introduction() {
  return (
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
          Your ultimate destination for cryptocurrency education, consulting,
          news, and valuable insights.Whether you&apos;re a beginner looking to
          understand the fundamentals of cryptocurrencies or an experienced
          investor seeking expert guidance, we&apos;ve got you covered. Explore
          our comprehensive resources, stay updated with the latest crypto news,
          and unlock the potential of digital currencies. Join our vibrant
          community and embark on an exciting journey into the world of
          cryptocurrencies.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
