import './App.css';
import Banner from './Components/Banner';
import CardPart from './Components/CardPart';
import FeaturedPart from './Components/FeaturedPart';
import HowWork from './Components/HowWork';
import Nav from './Components/Nav';
import SecondPart from './Components/SecondPart';
import ThirdPart from './Components/ThirdPart';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
      <CardPart></CardPart>
      <FeaturedPart></FeaturedPart>
      <HowWork></HowWork>


    </div>
  );
}

export default App;
