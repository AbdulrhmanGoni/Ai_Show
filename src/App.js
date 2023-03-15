import dataCenter from "./data_center/dataCenter";
import { Provider } from "react-redux";
import { homePageBgs, theirStory, FounderData, theEvents } from "./Ai_Show_Data.js";
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import SocialBar from './components/SocialBar.js';
import Separators from './components/Separators.js';
import HomePage from './components/HomePage.js';
import Introduction from './components/Introduction.js';
import Subscribe from './components/Subscribe.js';
import TheirStory from './components/TheirStory.js';
import TheFounder from './components/TheFounder.js';
import Events from './components/Events.js';
import LatestVideos from './components/LatestVideos.js';
import Members from './components/Members.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {

  return (
    <>
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
    </>

  );

}


export default App;