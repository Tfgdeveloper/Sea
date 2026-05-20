import React, { useEffect} from "react";
import Home from './pages/main/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/main/About';
import Services from './pages/main/Services';
import Portfolio from './pages/main/Portfolio';
import Contact from './pages/main/Contact';
import Publishing from './pages/services/Publishing';
import Ghostwriting from './pages/services/Ghostwriting';
import Editing from './pages/services/Editing';
import CoverDesign from './pages/services/CoverDesign';
import Marketing from './pages/services/Marketing';
import AudioBook from './pages/services/AudioBook';
import TimeSquareEvent from './pages/services/TimeSquareEvent';
import Privacy from './pages/others/Privacy';
import Terms from './pages/others/Terms';
import Return from './pages/others/Return';
import { LiveChatWidget } from "@livechat/widget-react";
import ScrollToTop from './components/Scrollontop';
import Thankyou from "./pages/others/Thankyou";
import PublishingSolution from "./pages/lp/PublishingSolution";
import Popup from "./components/Popup";
import PopupManager from "./components/PopupManager";


function App() {

  useEffect(() => {
    const setupLiveChatAutoPopup = () => {
      if (window.LiveChatWidget) {
        window.LiveChatWidget.on('new_event', (event) => {
          if (
            ["message", "rich_message", "file"].includes(event.type) &&
            event.author.type !== 'customer'
          ) {
            window.LiveChatWidget.call("maximize");
          }
        });
      }
    };

    if (window.LiveChatWidget) {
      setupLiveChatAutoPopup();
    }
  }, []);


  return (
    <>
    <BrowserRouter>
    <PopupManager />
    <ScrollToTop />
      
      <LiveChatWidget license="19067595" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/publishing-and-distribution" element={<Publishing />} />
        <Route path="/ghostwriting-&-manuscript" element={<Ghostwriting />} />
        <Route path="/editing-&-proofreading" element={<Editing />} />
        <Route path="/coverdesign-&-Illustrations" element={<CoverDesign />} />
        <Route path="/marketing-&-campaigns" element={<Marketing />} />
        <Route path="/audiobook" element={<AudioBook />} />
        <Route path="/time-square-event" element={<TimeSquareEvent />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return" element={<Return />} />
        <Route path="/thank-you" element={<Thankyou />} />

        <Route path="/publishings-solutions" element={<PublishingSolution/>} />
      
      </Routes>
      
    </BrowserRouter>
    
    </>
  ) }

export default App;
