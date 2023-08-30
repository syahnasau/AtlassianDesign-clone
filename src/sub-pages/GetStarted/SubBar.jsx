
import SideBar from "../../components/Sidebar";

function SubBar() {
  const sidebarLinks = [
    { to: "#", text: "Content design", },
    { to: "#", text: "Design" },
    { to: "#", text: "Develop" },
  ];

  return (
    <div>
      
      <SideBar links={sidebarLinks} titleBar="Content Design" />
      
    </div>
  );
}

export default SubBar;
