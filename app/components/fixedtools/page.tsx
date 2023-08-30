import SideBar from "./sidebar/page";
import Header from "./header/page";
import Nav from "./navigation/page";

function FixedTools({ children }: any) {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full ">
        <Header />
      </div>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
}

export default FixedTools;
