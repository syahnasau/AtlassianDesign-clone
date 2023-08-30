import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";
import SubBar from "../sub-pages/Brand/SubBar";

function BrandPage() {
  return ( 
    <div>
      <div className="row">
            <div className="col-3 p-0 border-end">
              <SubBar/>
              </div>
              <div className="col p-0">
                  <HeaderBrand />
                  <MenuBrand />
                  <Footer />
              </div>
            </div>
    </div>
    
   );
}


  function HeaderBrand() {
    return ( 
        <HeaderMenu 
        TitleHeader="Brand"
        SubHeader= " Our brand reflects who we are and how we want our users to feel when they use our products. It’s the unique combination of our mission and values, and principles that drive our promise to unleash the potential of every team."
        imgHeader = "https://atlassian.design/static/8bc6416be603a42001d9b065b1bed765/brand@2x.png"
        />
     );
}
  
  function MenuBrand() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="flag"
                            backgroundColor = "#1D7AFC"
                            cardTitle="Mission"
                            cardText="Our mission is to unleash the potential in every team."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="emoji-smile"
                            backgroundColor = "#1D7AFC"
                            cardTitle="Personality"
                            cardText="Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="star"
                            cardTitle="Promise"
                            backgroundColor = "#1D7AFC"
                            cardText="Our promise is that our tools and practices will help teams work better together in an agile, open, and scalable way.."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="heart"
                            backgroundColor = "#1D7AFC"
                            cardTitle="Values"
                            cardText="Our values reflect the spirit with which an Atlassian works to fulfill our promise."
                        />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }

  export default BrandPage;