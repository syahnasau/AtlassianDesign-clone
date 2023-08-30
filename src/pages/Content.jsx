import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ResourceMenu from "../components/ResourcesMenu";

function ContentPage() {
  return ( 
    <div>
      <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderContent />
                  <MenuContent />
                  <Footer />
              </div>
            </div>
    </div>
   );
}

export default ContentPage;


  function HeaderContent() {
    return ( 
        <HeaderMenu
        TitleHeader="Content"
        SubHeader= "Our content guidance covers our voice and tone, and the mechanics of our grammar and style. We use clear, concise and conversational language to craft the messages teams need to know, to get them to where they need to go."
        imgHeader = "https://atlassian.design/static/aa4570adecb9452ad86ef2a287b022ed/content@2x.png"
        />
     );
}
  
  function MenuContent() {
    return (
        <>
        <section className="SectionFive pb-5 bg-white">
            <div className="container p-4">
   
  
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="heart"
                            backgroundColor = "#E34935"
                            cardTitle="Inclusive language"
                            cardText="Inclusive language is free from words, phrases, or tones that reflect prejudiced, stereotyped or discriminatory views of particular people. "
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="quote"
                            backgroundColor = "#E34935"
                            cardTitle="Language and grammar"
                            cardText="Use conventions to make your writing clear, consistent, and localizable. "
                        />
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <ResourceMenu
                            icon="type"
                            cardTitle="Vocabulary"
                            backgroundColor = "#E34935"
                            cardText="A list of words that are defined in terms of how we use them at Atlassian. "
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="music-note-beamed"
                            backgroundColor = "#E34935"
                            cardTitle="Voice and tone principles"
                            cardText="The principles behind using the Atlassian voice and tone guidelines."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="pencil-fill"
                            backgroundColor = "#E34935"
                            cardTitle="Writing guidelines"
                            cardText="Use these guidelines as a source of truth, for best practices and patterns when writing messages."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                        <ResourceMenu
                            icon="pen"
                            backgroundColor = "#E34935"
                            cardTitle="Writing style"
                            cardText="The Atlassian writing style reflects our core company values, company mission, design principles, and our voice and tone."
                        />
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
  }