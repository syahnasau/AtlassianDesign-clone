import logo from '../assets/logo.png'

function Navbar() {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#FFFFFF', color: '#6B778C', borderBottom: '1px solid #091E4224' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} className="" alt="Atlassian Design" 
            style={{ height: 20, width: 20, display: 'inline-block', position: 'relative', marginTop: -5, }}/>
          </a>
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
                <NavMenu text="Get started" />
                <NavMenu text="Brand" />
                <NavMenu text="Foundations" />
                <NavMenu text="Tokens" />
                <NavMenu text="Components" />
                <NavMenu text="Content" />
                <NavMenu text="Patterns" />
                <NavMenu text="Resources" />
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
        <a className="nav-link active" aria-current="page" href="#" 
        style={{fontSize: 14, fontWeight: 500, letterSpacing: 0.5, color: '#344563' }} >
            {props.text}
        </a>
      </li>
    </>
  );
}

function ModalSearch() {
  // kayaknya pk useState deh
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
