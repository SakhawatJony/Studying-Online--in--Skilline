import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import TrustedCompanies from './Components/TrustedCompanies/TrustedCompanies';
import OneSoftware from './Components/OneSoftware/OneSoftware';
import Skilline from './Components/Skilline/Skilline';
import ClassRoom from './Components/ClassRoom/ClassRoom';
import OurFeatures from './Components/OurFeatures/OurFeatures';
import Tools from './Components/Tools/Tools';
import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Home></Home>
     <TrustedCompanies></TrustedCompanies>
      <OneSoftware></OneSoftware>
     <Skilline></Skilline>
     <ClassRoom></ClassRoom>
     <OurFeatures></OurFeatures>
     <Tools></Tools>
     <Footer></Footer>
       
    </div>
  );
}

export default App;
