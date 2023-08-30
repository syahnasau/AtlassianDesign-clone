import Footer from "../../components/Footer";
import HeaderMenu from "../../components/HeaderMenu";
import SideBar from "../../components/Sidebar";
import SubSideBar from "./SubBar";

function Develop() {
    return ( 
        <div>
            <div className="row">
            <div className="col-3 p-0 border-end">
              <SubSideBar/>
              </div>
              <div className="col p-0">
                  <HeaderDevelop />
                  <Main />
                  <Footer />
              </div>
            </div>
        </div>
     );
}

function HeaderDevelop() {
    return ( 
        <HeaderMenu 
        TitleHeader="Develop"
        SubHeader= "Set up your environment to use Atlassian Design System components, design tokens, and tools."
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
                    <p>This page lists how to use Atlassian's design system components and developer tools.</p>
                    <img src="https://images.ctfassets.net/8j5aqoy0ts8s/5Kf2I0tER7QHjte4daj2Yy/0d6f8de677f80efd0184679b68709f77/ads_-_dark.png" className="img-fluid" alt="" />
                </div>
                <div className="p-4">
                    <div id="LearnTheAtlassian" className="pb-3">
                        <h4 ><i class="bi bi-link-45deg pe-2"></i>
                        Before you begin</h4>
                        <p>
                        These shared visual styles and components create harmonious experiences across Atlassian products.The Atlassian Design System is implemented with React 16 and TypeScript. Make sure you have React and optionally TypeScript installed before you start.
                        </p>
                        <p>
                        You’ll also need a package manager like NPM. We use yarn in our examples:
                        </p>
                        
                        <div>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="col">

            </div>
        </div>
        

        </div>
     );
}

export default Develop;