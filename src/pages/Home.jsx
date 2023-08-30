import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardMenu from '../components/CardMenu';
import CardMenu2 from '../components/CardMenu2';
import CardMenu3 from '../components/CardMenu3';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
    <div>
        <Header />
        <Section />
        <SectionBrand />
        <SectionFoundations />
        <SectionContent />
        <SectionResources />
        <Footer />
  
    </div>
     );
}

function Header() {
    return (
      <>
        <section className="SecHeader container mt-4 p-4">
          <div className="p-0" style={{ backgroundColor: "", width: "100%" }}>
            <div className="row " style={{ display: "flex" }}>
              <div className="col-lg-6 col-sm-12 m-auto">
                <h1 className="h1-header pb-3">Design, develop, deliver</h1>
                <p className="">
                  Use Atlassian's end-to-end design languange to create simple,
                  intuitive and beutiful experiences.
                </p>
  
                <Link to="/started" className="">
                  <button
                    className="btn btn-primary my-4 text-center mx-auto"
                    style={{ fontWeight: 500, fontSize: 14 }}
                  >
                    Get started
                  </button>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img
                  src="https://atlassian.design/static/43b3a69216eac32c2ba8799f74e5e128/homepage@2x.png"
                  alt=""
                  className="m-auto w-100"
                />
              </div>
            </div>
          </div>
          <VideoButton />
        </section>
      </>
    );
  }
  function VideoButton() {
    return (
      <section className="mt-5 SecFuture">
          <div className="card position-relative">
            <div className="videoOverplay z-0 position-absolute" style={{ height: 100, width: "100%" }}>
              <video
                src="https://atlassian.design/static/0c19db27d1d90cd0b293d1494f64e6a8/ads-vision-video.mp4"
                autoPlay
                muted
                loop
                style={{ height: 50, width: "100%" }}
                className="object-fit-cover rounded-4 p-3"
              ></video>
            </div>
            <div className="backgroundVideo position-absolute z-1 rounded-2" style={{ height: 60, width: "100%" }}></div>
            <div className="row g-0 p-2 position-absolute z-2" style={{ height: 50, width: "100%" }}>
              <div className="col-1 d-flex align-items-center">
                <span className="badge mx-auto" style={{ backgroundColor: "#6E5DC6", fontSize: 11 }}>
                  New
                </span>
              </div>
              <div className="col-9 d-flex align-items-center p-2 txt-Future">
                See the future of Atlassian Design System.
              </div>
              <div className="col d-flex align-items-center justify-content-end pe-4">
                <a href="" className="">
                  <button className="btnVideo  p-1 px-2">Watch the video</button>
                </a>
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  function Section() {
    return (
        <>
            
      <section className="SectionOne">
        <div className="container mb-5 p-4">
          <div className="row">
            <div className="col">
              <CardMenu3
                cardImg="https://atlassian.design/static/4ad0e21f17f948ed0dd804b5ac9a2534/homepage-tokens@2x.png"
                badgeText="T"
                badgeColor="warning"
                cardTitle="Tokens"
                cardText="Design tokens are the single source of truth to name and store design decisions."
                linkText="Explore out tokens"
                linkIcon="arrow-right"
                to="/tokens"
              />
            </div>
            <div className="col">
              <CardMenu3
                cardImg="https://atlassian.design/static/902dd94dc5a48a044cefe275f1b90c93/homepage-components@2x.png"
                badgeText="C"
                badgeColor="success"
                cardTitle="Component"
                cardText="Componenets are the intuitive building blocks of out design system."
                linkText="Explore our components"
                linkIcon="arrow-right"
                to="/components"
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
  }
  
  function SectionBrand() {
    return (
      <>
        <section className="SectionMenu">
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
                <CardMenu
                  backgroundColor = "#1D7AFC"
                  icon="flag"
                  cardTitle="Mission"
                  cardText="Our mission is to unleash the potential in every team."
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  icon="emoji-smile"
                  backgroundColor = "#1D7AFC"
                  cardTitle="Personality"
                  cardText="Our personality describes the tone we use for external communications. It should be expressed as an embodiment of our values."
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  icon="star"
                  backgroundColor = "#1D7AFC"
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
  
  function SectionFoundations() {
    return (
      <>
        <section className="SectionMenu">
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
                <CardMenu
                  backgroundColor = "#1D9AAA"
                  icon="paint-bucket"
                  cardTitle="Color"
                  cardText="Color distinguishes our brand and helps us create consistent experiences across products."
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  backgroundColor = "#1D9AAA"
                  icon="star"
                  cardTitle="Iconography"
                  cardText="Icons are visual representations of commands, devices, directories, or common actions"
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  backgroundColor = "#1D9AAA"
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
  
  function SectionContent() {
    return (
      <>
        <section className="SectionMenu  ">
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
                <CardMenu
                  icon="quote"
                  backgroundColor = '#E34935'
                  cardTitle="Language and grammar"
                  cardText="Use conventions to make your writing clear, consistent, and localizable."
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  icon="pip"
                  backgroundColor = '#E34935'
                  cardTitle="Vocabulary"
                  cardText="A list of words that are defined in terms of how we use them at Atlassian."
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <CardMenu
                  icon="pen"
                  backgroundColor = '#E34935'
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
  
  function SectionResources() {
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
                        <CardMenu2
                            icon="plus"
                            cardTitle="Contribution"
                            cardText="Contributing to our design system – a library of content, design, tooling, and code for products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <CardMenu2
                            icon="window-sidebar"
                            cardTitle="Figma tooling"
                            cardText="Our Figma libraries contain the latest foundations, components, and patterns for designing and building Atlassian products."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <CardMenu2
                            icon="type"
                            cardTitle="Fonts"
                            cardText="Our fonts have been chosen to communicate in a way that helps our users achieve their goals."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <CardMenu2
                            icon="pen"
                            cardTitle="Illustration library"
                            cardText="A catalog of our visual storytelling assets."
                        />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <CardMenu2
                            icon="star"
                            cardTitle="Logo library"
                            cardText="Atlassian’s official logos and lockups for all programs, properties, and products."
                        />
                        </div>
                        
                        <div className="col-sm-12 col-md-6 col-lg-4">
                        <CardMenu2
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
  

export default Home;