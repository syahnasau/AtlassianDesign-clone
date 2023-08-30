
import SideBar from "../../components/Sidebar";

function SubBar() {
  const sidebarLinks = [
    { to: "#", text: "Mission", },
    { to: "#", text: "Personality" },
    { to: "#", text: "Promise" },
    { to: "#", text: "Values" },
  ];

  return (
    <div>
      
      <SideBar links={sidebarLinks} titleBar="Content Design" />
      
    </div>
  );
}

export default SubBar;
