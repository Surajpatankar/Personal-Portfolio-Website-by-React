import './App.css';
import './Media.css';
import About from './components/About';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import VIP from './components/VIP';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div>
     <Banner />
     <Nav />
     <Services />
     <About />
     <Portfolio />
     <VIP/>
     <Contact/>
    </div>
  );
}

export default App;
