import Footer from "../../components/Footer";
import HeaderMenu from "../../components/HeaderMenu";
import SideBar from "../../components/Sidebar";
import SubSideBar from "./SubBar";

function Design() {
    return ( 
        <div>
            <div className="row">
            <div className="col-3 p-0 border-end">
              <SubSideBar/>
              </div>
              <div className="col p-0">
                  <HeaderContentDesign />
                  <Main />
                  <Footer />
              </div>
            </div>
        </div>
     );
}

function HeaderContentDesign() {
    return ( 
        <HeaderMenu 
        TitleHeader="Design"
        SubHeader= "Learn design guidelines and get access to Figma libraries and tools."
        />
     );
}
  
function Main() {
    return ( 
        <div className="subHeader">
        <div className="row">
            <div className="col-sm-12 col-lg-9">
                <div className="p-4">
                    <p>Atlassian Design System is a collection of UI components, foundations, and standards that help teams build beautiful product experiences.</p>
                    <p>This page lists how to use our design guidelines and Figma tools. </p>
                    <img src="https://images.ctfassets.net/8j5aqoy0ts8s/5Kf2I0tER7QHjte4daj2Yy/0d6f8de677f80efd0184679b68709f77/ads_-_dark.png" className="img-fluid" alt="" />
                </div>
                <div className="p-4">
                    <div id="LearnTheAtlassian" className="pb-3">
                        <h4 ><i class="bi bi-link-45deg pe-2"></i>
                        Learn Atlassian’s design guidelines </h4>
                        <p>
                        These shared visual styles and components create harmonious experiences across Atlassian products.
                        </p>
                            <ul>
                                <li>
                                <a href="/">Foundations </a>
                                    are our core visual styles. Learn how to apply color, elevation, spacing, iconography, and typography to your designs.
                                    
                                </li>
                                
                            </ul>
                    </div>
                   
                </div>
            </div>
            <div className="col">

            </div>
        </div>
        

        </div>
     );
}

export default Design;