import CardImage from "../components/CardImage";
import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";

function ComponentPage() {
    return ( 
        <div className="row">
            <div className="col-3 p-0 border-end">
              
              </div>
              <div className="col p-0">
                  <HeaderComponent />
                  <MenuComponent />
                  <Footer />
              </div>
            </div>
     );
}

function HeaderComponent() {
    return ( 
        <HeaderMenu
        TitleHeader="Components"
        SubHeader= "Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences."
        imgHeader = "https://atlassian.design/static/f735e69f6c3283db2ddcd69f34eb1368/components@2x.png"
        />
     );
}

function MenuComponent() {
    return ( 
        <section className=" pb-5 bg-white">
            <div className="container p-4">
            <div className="row">

            <CardImage 
               
               image="https://atlassian.design/static/d18486f0ad05cd79d1f8ad08cd749617/atlassian-navigation.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="https://atlassian.design/static/3f5f134ee3134d319f06cc9d4822172a/avatar.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="https://atlassian.design/static/0d25a053e3d69ca55bd15c0900af36c7/avatar-group.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="	https://atlassian.design/static/b2c4de24e5bfd564c72eb4a4aa36b814/badge.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="	https://atlassian.design/static/bbf8c148a1cf97bba01e484d68ff157d/banner.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="	https://atlassian.design/static/ea48bcb39875aab4e564930f42c26494/blanket.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="https://atlassian.design/static/3cee5adf99146c176f6ba97cb968c068/breadcrumbs.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="	https://atlassian.design/static/d3537ca05fe1ce6cb67d42f6e15ebfd5/button.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
               <CardImage 
               
               image="https://atlassian.design/static/a377eedac4b430adb3898c1e58e78d24/calendar.svg"
               cardTitle= "Atlassian navigation"
               cardText = "A horizontal navigation component for Atlassian products."
               
               />
            </div>
  
              
                
            </div>
        </section>
     );
}


export default ComponentPage;