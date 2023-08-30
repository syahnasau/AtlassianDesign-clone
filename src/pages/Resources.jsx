import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";


function ResourcesPage() {
    return ( 
        <div>
            <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderResource />
                  <MenuResources />
                  <Footer />
              </div>
            </div>
        </div>
     );
}

function HeaderResource() {
    return ( 
        <HeaderMenu 
        TitleHeader="Resources"
        SubHeader= "A collection of tools, kits, plugins and guides to help simplify the creation process for our users."
        imgHeader = "https://atlassian.design/static/d91d1e05a1917e7a92283dafd85e3145/resources@2x.png"
        />
     );
}


function MenuResources() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#CD519D"
                            cardTitle="Content design"
                            cardText="Learn product voice and tone, find UI patterns, and use inclusive language."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="window-sidebar"
                            backgroundColor = "#CD519D"
                            cardTitle="Design"
                            cardText="Learn design guidelines and get access to Figma libraries and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="code-slash"
                            cardTitle="Develop"
                            backgroundColor = "#CD519D"
                            cardText="Set up your environment to use Atlassian Design System components, design tokens, and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#CD519D"
                            cardTitle="Content design"
                            cardText="Learn product voice and tone, find UI patterns, and use inclusive language."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="window-sidebar"
                            backgroundColor = "#CD519D"
                            cardTitle="Design"
                            cardText="Learn design guidelines and get access to Figma libraries and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="code-slash"
                            cardTitle="Develop"
                            backgroundColor = "#CD519D"
                            cardText="Set up your environment to use Atlassian Design System components, design tokens, and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#CD519D"
                            cardTitle="Content design"
                            cardText="Learn product voice and tone, find UI patterns, and use inclusive language."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="window-sidebar"
                            backgroundColor = "#CD519D"
                            cardTitle="Design"
                            cardText="Learn design guidelines and get access to Figma libraries and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="code-slash"
                            cardTitle="Develop"
                            backgroundColor = "#CD519D"
                            cardText="Set up your environment to use Atlassian Design System components, design tokens, and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="window-sidebar"
                            backgroundColor = "#CD519D"
                            cardTitle="Design"
                            cardText="Learn design guidelines and get access to Figma libraries and tools."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="code-slash"
                            cardTitle="Develop"
                            backgroundColor = "#CD519D"
                            cardText="Set up your environment to use Atlassian Design System components, design tokens, and tools."
                        />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }


export default ResourcesPage;