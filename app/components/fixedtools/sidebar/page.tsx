
import ItemSection from "./elements/ItemSection";
import UserProfile from "./UserProfile";

function SideBar() {
  return (
    <div className="bg-slate-400 w-[220px] min-h-screen p-4 ">
      <UserProfile login={false} username={"Afshin"} />
      <ItemSection>
        <p>Home</p>
      </ItemSection>
      <ItemSection>
        <p>Coins</p>
      </ItemSection>
      <ItemSection>
        <p>News</p>
      </ItemSection>
      <ItemSection>
        <p>Home</p>
      </ItemSection>
      
    </div>
  );
}

export default SideBar;
