import Footer from "../../components/Footer";
import HeaderMenu from "../../components/HeaderMenu";
import SideBar from "../../components/Sidebar";
import SubSideBar from "./SubBar";

function ContentDesign() {
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
        TitleHeader="Content design"
        SubHeader= "Learn product voice and tone, find UI patterns, and use inclusive language."
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
                    <p>This page lists the most important things you’ll need to do to start writing and designing UI content with Atlassian Design System.</p>
                    <img src="https://images.ctfassets.net/8j5aqoy0ts8s/5Kf2I0tER7QHjte4daj2Yy/0d6f8de677f80efd0184679b68709f77/ads_-_dark.png" className="img-fluid" alt="" />
                </div>
                <div className="p-4">
                    <div id="LearnTheAtlassian" className="pb-3">
                        <div className="py-2">
                            <h4 ><i class="bi bi-link-45deg pe-2"></i> Learn the Attlassian product voice and tone </h4>
                        </div>
                        <div>
                            <ul>
                                <li>Reflect the Atlassian brand and personality using the 
                                    <a href="/content/voice-and-tone-principles/"> voice and tone principles</a>
                                </li>
                                <li>Use words and phrases that include everyone by following the 
                                    <a href="/content/inclusive-writing/"> inclusive language guide</a>
                                </li>
                                <li>Check the words we use in the  
                                    <a href="https://go.atlassian.com/vocab"> Atlassian vocabulary</a>
                                      (only accessible to Atlassians).
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="FollowUIContent" className="pb-3">
                        <div className="py-2">
                            <h4 className="py-1" ><i class="bi bi-link-45deg pe-3   "></i>Follow UI content standards </h4>
                            <p className="ps-3">UI content standards are the patterns that help teams write and design content for UIs. 
                            <span>Our products use UI content standards from Atlassian Design System and our other design systems to build user experience (UX) patterns (for example, a log-in form)</span></p>
                        </div>
                        <div>
                            <ul>
                                <li>Find specific UI content standards (for example, button microcopy) in
                                    <span><a href=""> Components</a></span>
                                </li>
                                <li>Get accessibility, color, and iconography requirements in
                                    <span><a href="/content/inclusive-writing/"> Foundations</a></span>
                                    
                                </li>
                                
                            </ul>
                        </div>
                        
                            
                    </div>
                    <div id="LearnTheAtlassian" className="pb-3">
                        <div className="py-2">
                            <h4 className="py-1" ><i class="bi bi-link-45deg pe-3   "></i>Access Figma libraries and brand assets </h4>
                            </div>
                        <div>
                            <ul>
                                <li>Find Figma libraries, plugins, and resources in
                                    <span><a href=""> Figma</a></span>
                                </li>
                                <li>Download fonts, illustrations, presentation kit, and templates in the
                                    <span><a href="/content/inclusive-writing/"> Brand Creative Library </a></span>
                                    (only accessible to Atlassians).
                                </li>
                                
                            </ul>
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

export default ContentDesign;