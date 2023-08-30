import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";

function FoundationsPage() {
  return ( 
    <div>
      <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderFoundations />
                  <MenuFoundations />
                  <Footer />
              </div>
            </div>
    </div>
   );
}

export default FoundationsPage;

  function HeaderFoundations() {
    return ( 
        <HeaderMenu 
        TitleHeader="Foundations"
        SubHeader= "Foundations are the visual elements needed to create engaging end-to-end user experiences. This includes guidance on iconography, typography, layout and structure."
        imgHeader = "https://atlassian.design/static/8d95c802a65943023de5eea0f2a4f0f7/foundations@2x.png"
        />
     );
}
  
  function MenuFoundations() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="eye"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Accessibility"
                            cardText="Accessible design lets people of all abilities interact with, understand, and navigate our products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="paint-bucket"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Color"
                            cardText="Color distinguishes our brand and reinforces consistent experiences across products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="file"
                            cardTitle="Elevation"
                            backgroundColor = "#1D9AAA"
                            cardText="Elevations are layered surfaces that form the foundation of UI."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="star"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Iconography"
                            cardText="Icons are visual representations of commands, devices, directories, or common actions."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="pencil-fill"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Illustrations"
                            cardText="Illustrations help convey complex ideas in a simple way. They should be meaningful and reflect a user's context and emotional state."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Logos"
                            cardText="Our brand and product logos are clear, impactful, and recognizable. All use our blue and white color palette with a few variations."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="grid"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Spacing"
                            cardText="A spacing system simplifies the creation of page layouts and UI."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="type"
                            backgroundColor = "#1D9AAA"
                            cardTitle="Typhography"
                            cardText="Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey. "
                        />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }