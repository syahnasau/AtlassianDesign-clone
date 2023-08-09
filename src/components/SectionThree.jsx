import CardMenu from "./SectionOne";

function SectionThree() {
  return (
    <>
      <section className="SectionTwo">
        <div className="container border-bottom my-3 p-4">
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-12 ">
              <div className="card  py-4">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge me-1" style={{backgroundColor: '#1D9AAA'}}>F</span>
                    Foundations
                  </h5>
                  <p className="card-text">
                    Foundations are the visual elements needed to create engaging layouts and end-to-end user experiences.
                  </p>
                  <a href="#" className="">
                    Explore our foundations
                    <i className="ps-1 bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <FoundationMenu
                icon="paint-bucket"
                cardTitle="Color"
                cardText="Color distinguishes our brand and helps us create consistent experiences across products."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <FoundationMenu
                icon="star"
                cardTitle="Iconography"
                cardText="Icons are visual representations of commands, devices, directories, or common actions"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <FoundationMenu
                icon="type"
                cardTitle="Typography"
                cardText="Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey."
              />
            </div>
            
            
          </div>
        </div>
      </section>
    </>
  );
}

function FoundationMenu(props) {
    return (
        <>
        <div className="card brandMenu p-1 my-2">
            <div className="card-body">
                <div className="badge mb-2" style={{ padding: '15px', backgroundColor: '#1D9AAA' }}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>

        </>
    )
}

export default SectionThree;
