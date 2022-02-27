import logo from './logo.svg';
import './App.css';
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import CountDown from "./components/CoutDown/CountDown";
import Analysis from "./components/Analysis/Analysis";
import Video from "./components/Video/Video";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import CallToAction from "./components/callToAction/callToAction";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div className="App">
        <TopNavigation/>
      <TopBanner/>
      <Services/>
      <AboutUs/>
      <CountDown/>
        <Video/>
        <TeamMembers/>
        <CallToAction/>
        <Testimonial/>
        <Footer/>

    </div>
  );
}

export default App;
