import './App.css';
import Navbar from './components/Navbar';
import SectionEight from './components/SectionEight';
import SectionEleven from './components/SectionEleven';
import SectionFour from './components/SectionFour';
import SectionNine from './components/SectionNine';
import SectionSeven from './components/SectionSeven';
import SectionSix from './components/SectionSix';
import SectionTen from './components/SectionTen';  
import SectionThree from './components/SectionThree';
import SectionTweleve from './components/SectionTweleve';
import SectionTwo from './components/SectionTwo';
import Header from './components/Header';
import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      {/* <SectionOne /> */}
      <SectionTwo />
      <SectionNine />
      <SectionTen />
      {/* <SectionThree /> */}
      <SectionFour />
      <SectionSix />
      <SectionSeven />
      <SectionEleven />
      <SectionTweleve />
    </div>
  );
}

export default App;

