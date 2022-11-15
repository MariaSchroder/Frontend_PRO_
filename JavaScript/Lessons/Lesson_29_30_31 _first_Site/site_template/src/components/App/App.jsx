import '../../style.css'
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Nav from '../Nav';
import Services from '../Services';

function App() {
  return (
    <div>
      <Nav />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;