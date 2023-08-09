

function SectionFour() {
  return (
    <>
      <section className="SectionTwo  ">
        <div className="container  my-3 p-4 ">
          <div className="row">
            <div className="col-lg-3 col-sm-12 ">
              <div className="card  py-4">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge me-1" style={{backgroundColor: '#E34935'}}>C</span>
                        Content
                  </h5>
                  <p className="card-text">
                    Our content guidance covers our voice and tone, and the mechanics of our grammar and style.
                  </p>
                  <a href="#" className="">
                    Explore our guidance
                    <i className="ps-1 bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <ContentMenu
                icon="quote"
                cardTitle="Language and grammar"
                cardText="Use conventions to make your writing clear, consistent, and localizable."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <ContentMenu
                icon="pip"
                cardTitle="Vocabulary"
                cardText="A list of words that are defined in terms of how we use them at Atlassian."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <ContentMenu
                icon="pen"
                cardTitle="Writing style"
                cardText="The Atlassian writing style reflects our core company values, company mission, design principles, and our voice and tone."
              />
            </div>
            
            
          </div>
        </div>
      </section>
    </>
  );
}

function ContentMenu(props) {
    return (
        <>
        <div className="card brandMenu p-1 my-2">
            <div className="card-body">
                <div className="badge mb-2" style={{ padding: '15px', backgroundColor: '#E34935' }}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>
        </>
    )
}

export default SectionFour;
