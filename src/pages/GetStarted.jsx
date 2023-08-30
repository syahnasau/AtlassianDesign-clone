
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";
import SubSideBar from "../sub-pages/GetStarted/SubBar";

function StartedPage() {
    return ( 
        <div>
            <div className="row">
            <div className="col-3 p-0 border-end">
              <SubSideBar />
            </div>
            <div className="col p-0">
                <HeaderStarted />
                <MenuStarted />
                <Footer />
            </div>
            </div>
             
            
        </div>
     );
}

  function HeaderStarted() {
    return ( 
        <HeaderMenu 
        TitleHeader="Get started"
        SubHeader= "Start designing and developing beautiful product experiences with Atlassian Design System UI foundations, components, and standards."
        imgHeader = "https://atlassian.design/static/8c4f23bbe5161044a68ae27844a8fdc2/get-started@2x.png"
        />
     );
}

  function MenuStarted() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <Link to="/started/content-design" className="link">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#8270DB"
                            cardTitle="Content design"
                            cardText="Learn product voice and tone, find UI patterns, and use inclusive language."
                        />
                        </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <Link to="/started/design" className="link">
                        <ResourceMenu
                            icon="window-sidebar"
                            backgroundColor = "#8270DB"
                            cardTitle="Design"
                            cardText="Learn design guidelines and get access to Figma libraries and tools."
                        />
                        </Link>
                        
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <Link to="/started/develop" className="link">
                        <ResourceMenu
                            icon="code-slash"
                            cardTitle="Develop"
                            backgroundColor = "#8270DB"
                            cardText="Set up your environment to use Atlassian Design System components, design tokens, and tools."
                        /></Link>
                        
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }



export default StartedPage;