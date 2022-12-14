import './App.css';
import Banner from './Components/Banner';
import CardPart from './Components/CardPart';
import FeaturedPart from './Components/FeaturedPart';
import Footer from './Components/Footer';
import HowWork from './Components/HowWork';
import Icon from './Components/Icon';
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
      <Icon></Icon>
      <HowWork></HowWork>
      <Footer></Footer>



    </div>
  );
}

export default App;
