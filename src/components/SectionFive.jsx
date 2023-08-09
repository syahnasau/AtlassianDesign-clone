function SectionFive() {
    return (
        <>
        <section className="SectionFive pb-5">
            <div className="container p-4">
                <div className="text-center py-3">
                    <h2>Resources</h2>  
                    <p>
                        A collection of tools, kits, plugins and guides to help simplify the creation process for our users.
                    </p>
                </div>

                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="plus"
                            cardTitle="Contribution"
                            cardText="Contributing to our design system – a library of content, design, tooling, and code for products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="window-sidebar"
                            cardTitle="Figma tooling"
                            cardText="Our Figma libraries contain the latest foundations, components, and patterns for designing and building Atlassian products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="type"
                            cardTitle="Fonts"
                            cardText="Our fonts have been chosen to communicate in a way that helps our users achieve their goals."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="pen"
                            cardTitle="Illustration library"
                            cardText="A catalog of our visual storytelling assets."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="star"
                            cardTitle="Logo library"
                            cardText="Atlassian’s official logos and lockups for all programs, properties, and products."
                        />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <ResourceMenu
                            icon="window-desktop"
                            cardTitle="Presentation kit"
                            cardText="Our complete kit of presentation assets in Keynote and PowerPoint includes graphic assets, sample decks, and more."
                        />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

function ResourceMenu(props) {
    return (
        <>
        <div className="card brandMenu p-1">
            <div className="card-body">
                <div className="badge mb-2" style={{ padding: '15px', backgroundColor: '#CD519D' }}>
                    <i className={`bi bi-${props.icon}`}></i>
                </div>
                <h5 className="card-title mb-3">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </div>

        </>
    )
}

export default SectionFive;