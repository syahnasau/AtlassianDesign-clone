import CardMenu from "./SectionOne";

function SectionTwo() {
  return (
    <>
      <section className="SectionTwo">
        <div className="container border-bottom my-3 p-4">
          <div className="row mb-3">
            <div className="col-lg-3 col-sm-12 col-md-12 ">
              <div className="card d-flex py-4">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="badge text-bg-primary me-1">B</span>
                    Brand
                  </h5>
                  <p className="card-text">
                    Our brand reflects who we are and how we want our users to
                    feel when they use our products.
                  </p>
                  <a href="#" className="">
                    Explore our brand
                    <i className="ps-1 bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <BrandMenu
                icon="flag"
                cardTitle="Mission"
                cardText="Our mission is to unleash the potential in every team."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <BrandMenu
                icon="emoji-smile"
                cardTitle="Personality"
                cardText="Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <BrandMenu
                icon="star"
                cardTitle="Promise"
                cardText="Our promise is that our tools and practices will help teams work better together in an agile, open, and scalable way."
              />
            </div>
            
            
          </div>
        </div>
      </section>
    </>
  );
}

function BrandMenu(props) {
    return (
        <>
        <div className="card brandMenu p-1 my-2">
            <div className="card-body">
                <div className="badge text-bg-primary mb-2" style={{ padding: '15px' }}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>

        </>
    )
}

export default SectionTwo;
