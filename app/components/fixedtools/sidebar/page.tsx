import ItemSection from "./elements/ItemSection";
import UserProfile from "./UserProfile";

function SideBar() {
  return (
    <div className="bg-slate-400 w-[220px] min-h-screen p-4 ">
      <UserProfile login={true} username={"Afshin"} />
      <ItemSection children={["Home", "Coins", "News", "Blog", "About"]} />
    </div>
  );
}

export default SideBar;
