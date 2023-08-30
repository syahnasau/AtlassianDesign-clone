import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";

function TokenPage() {
  return ( 
    <div>
      <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderTokens />
                  <MenuTokens />
                  <Footer />
              </div>
            </div>
    </div>
   );
}

export default TokenPage;


  function HeaderTokens() {
    return ( 
        <HeaderMenu 
        TitleHeader="Tokens"
        SubHeader= "Design tokens are the single source of truth to name and store design decisions."
        imgHeader = "https://atlassian.design/static/48a594ba50ef868e42dd8be30f0113aa/tokens@2x.png"
        />
     );
}
  
  function MenuTokens() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="box"
                            backgroundColor = "#B38600"
                            cardTitle="Design tokens"
                            cardText="Design tokens are a single source of truth to name and store design decisions for Atlassian product experiences."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="question-circle-fill"
                            backgroundColor = "#B38600"
                            cardTitle="Migrate to tokens"
                            cardText="How products, apps, and teams move from old style values to design tokens."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="code"
                            cardTitle="Use tokens in code"
                            backgroundColor = "#B38600"
                            cardText="Learn how to set up and use design tokens in code."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#B38600"
                            cardTitle="Use tokens in design"
                            cardText="Design using tokens in Figma and preview new colors and tokens in products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="lightbulb"
                            backgroundColor = "#B38600"
                            cardTitle="What's new in foundations"
                            cardText="How our colors, spacing, and other foundations are changing with design tokens."
                        />
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }