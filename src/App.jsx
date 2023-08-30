
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import BrandPage from './pages/Brand';
import ComponentPage from './pages/Components';
import ContentPage from './pages/Content';
import FoundationPage from './pages/Foundations';
import StartedPage from './pages/GetStarted';
import Home from './pages/Home';
import PatternPage from './pages/Patterns';
import ResourcePage from './pages/Resources';
import TokenPage from './pages/Token';
import ContentDesign from './sub-pages/GetStarted/ContentDesign';
import Design from './sub-pages/GetStarted/Design';
import Develop from './sub-pages/GetStarted/Develop';



function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/started' Component={StartedPage}></Route>
          <Route path='/brand' Component={BrandPage}></Route>
          <Route path='/foundations' Component={FoundationPage}></Route>
          <Route path='/tokens' Component={TokenPage}></Route>
          <Route path='/components' Component={ComponentPage}></Route>
          <Route path='/contents' Component={ContentPage}></Route>
          <Route path='/patterns' Component={PatternPage}></Route>
          <Route path='/resources' Component={ResourcePage}></Route>

          <Route path='/started/content-design' Component={ContentDesign}></Route>
          <Route path='/started/design' Component={Design}></Route>
          <Route path='/started/develop' Component={Develop}></Route>
        </Routes>
    </div>
    
    
  )
}


export default App;

// export default App
