function SectionOne() {
    return (
        <>
            
      <section className="SectionOne">
        <div className="container mb-5 p-4">
          <div className="row">
            <div className="col">
              <CardMenu
                cardImg="https://atlassian.design/static/4ad0e21f17f948ed0dd804b5ac9a2534/homepage-tokens@2x.png"
                badgeText="T"
                badgeColor="warning"
                cardTitle="Tokens"
                cardText="Design tokens are the single source of truth to name and store design decisions."
                linkText="Explore out tokens"
                linkIcon="arrow-right"
              />
            </div>
            <div className="col">
              <CardMenu
                cardImg="https://atlassian.design/static/902dd94dc5a48a044cefe275f1b90c93/homepage-components@2x.png"
                badgeText="C"
                badgeColor="success"
                cardTitle="Component"
                cardText="Componenets are the intuitive building blocks of out design system."
                linkText="Explore our components"
                linkIcon="arrow-right"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

function CardMenu(props) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <img src={props.cardImg} alt="" width={150} />
            </div>
            <div className="col m-auto me-1">
              <h5 className="card-title">
              <span className={`badge text-bg-${props.badgeColor} me-1`}>{props.badgeText}</span>{props.cardTitle}
              </h5>
              <p className="card-text">{props.cardText}</p>
              <a href="#" className="">
                {props.linkText}
                <i className={`ps-1 bi bi-${props.linkIcon}`}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default SectionOne;