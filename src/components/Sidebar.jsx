function SideBar(props) {
    return (
      
      <nav className="sidebar px-4" style={{ paddingTop: 100 }}>
          
        <div className="sidebar-content">
          {props.links.map((link, index) => (
              <div>
              
              <a className="sidebar-link" href={link.to} key={index}>
              {link.text}
            </a>
              </div>
              
          ))}
        </div>
      </nav>
    );
  }
  
  export default SideBar;