import dataCenter from "./data_center/dataCenter";
import { Provider } from "react-redux";
import { homePageBgs, theirStory, FounderData, theEvents } from "./Ai_Show_Data";
import Header from './components/Header';
import NavBar from './components/NavBar';
import SocialBar from './components/SocialBar';
import Separators from './components/Separators';
import HomePage from './components/HomePage';
import Introduction from './components/Introduction';
import Subscribe from './components/Subscribe';
import TheirStory from './components/TheirStory';
import TheFounder from './components/TheFounder';
import Events from './components/Events';
import LatestVideos from './components/LatestVideos';
import Members from './components/Members';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <Provider store={dataCenter}>

      <Header>
        <SocialBar />
        <NavBar />
      </Header>

      <HomePage bgImages={homePageBgs} />

      <Introduction />

      <Subscribe />

      <TheirStory
        img={theirStory.images}
        title={theirStory.title}
        theStory={theirStory.theStory}
        successes={theirStory.successes}
        foundedDate={theirStory.foundedDate}
      />

      <TheFounder
        theFounder={FounderData.name}
        image={FounderData.image[1]}
        brief={FounderData.brief}
        addtionBrief={FounderData.addtionBrief}
        socialMediaLinks={FounderData.socialMediaLinks}
      />

      <Separators.Separator1 className="bg-color1" />

      <Members />

      <LatestVideos />

      <Events theEvents={theEvents} />

      <Contact />

      <Footer />

    </Provider>
  );

}


export default App;