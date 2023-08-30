import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";

function PatternsPage() {
  return (
    <div>
      <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderPatterns />
                  <MenuPatterns />
                  <Footer/>
              </div>
            </div>
    </div>
  );
}

export default PatternsPage;

function HeaderPatterns() {
  return ( 
      <HeaderMenu 
      TitleHeader="Patterns"
      SubHeader= "Patterns are reusable combinations of components that solve common user problems. These best practice solutions help users achieve their goals and help ensure consistency acrossexperiences."
      imgHeader = "https://atlassian.design/static/c3400e1392b642ee005a86d1aa1d5399/patterns@2x.png"
      />
   );
}


function MenuPatterns() {
  return (
    <>
      <section className="SectionFive pb-5 bg-white">
        <div className="container p-4">
          <div>
            <div className="row">
              <div className="col-sm-12 col-md-6 ">
                <ResourceMenu
                  icon="emoji-smile"
                  backgroundColor="#D97008"
                  cardTitle="First impressions"
                  cardText="First impressions are the experiences that people using our products encounter when they do or see something for the first time."
                />
              </div>
              <div className="col-sm-12 col-md-6 ">
                <ResourceMenu
                  icon="list-task"
                  backgroundColor="#D97008"
                  cardTitle="Forms"
                  cardText="Use forms to allow people to enter data for use by the application, or to configure options. "
                />
              </div>
              <div className="col-sm-12 col-md-6 ">
                <ResourceMenu
                  icon="chat-text"
                  backgroundColor="#D97008"
                  cardTitle="Messages"
                  cardText="Use messages to communicate conditions, indicate an event, or show responses to user actions."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
