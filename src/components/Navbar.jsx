import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#FFFFFF', color: '#6B778C', borderBottom: '1px solid #091E4224' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="" alt="Atlassian Design" 
            style={{ height: 20, width: 20, display: 'inline-block', position: 'relative', marginTop: -5, }}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavMenu text="Get started" to="/started" />
                <NavMenu text="Brand" to="/brand"/>
                <NavMenu text="Foundations" to="/foundations" />
                <NavMenu text="Tokens" to="/tokens" />
                <NavMenu text="Components" to="/components" />
                <NavMenu text="Content" to="/contents" />
                <NavMenu text="Patterns" to="/patterns" />
                <NavMenu text="Resources" to="/resources" />
            </ul>
            <form className="NavBtn d-flex" role="search">
              <button id="SearchBtn" className="btn" type="submit" style={{ display: 'flex', alignItems: 'center' }}
              data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="material-icons mx-2">search</span>
                Search
              </button>
              <button id="ThemeBtn" className="btn" type="submit">
                Theme
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavMenu(props) {
  return (
    <>
      <li className="nav-item">
        <Link to={props.to} className="nav-link active" aria-current="page" href="#" 
        style={{fontSize: 14, fontWeight: 500, letterSpacing: 0.5, color: '#344563' }} >
            {props.text}
        </Link>
        
      </li>
    </>
  );
}

export default Navbar;



