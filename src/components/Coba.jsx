// percobaan dengan array 

function Coba() {
    return (
      <>
        <section className="SectionOne">
          <div className="container mb-5 p-4">
            <div className="row">
              <CardMenu
                menuItems={[
                  {
                    icon: "flag",
                    title: "Brand 1",
                    description: "Our mission is to unleash the potential in every team.",
                  },
                  {
                    icon: "star",
                    title: "Brand 2",
                    description: "Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values",
                  },
                  {
                    icon: "heart",
                    title: "Brand 3",
                    description: "Description 3",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
  
  function CardMenu(props) {
    return (
      <>
        {props.menuItems.map((item, index) => (
          <div className="col">
            <div className="card brandMenu p-1" key={index}>
              <div className="card-body">
                <div
                  className="badge text-bg-primary mb-2"
                  style={{ padding: "15px" }}
                >
                  <i className={`bi bi-${item.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default Coba;
