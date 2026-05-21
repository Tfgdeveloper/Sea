import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from './components/Scrollontop';
import PopupManager from "./components/PopupManager";
import { LiveChatWidget } from "@livechat/widget-react";
import Badges from "./components/Badges";

// ✅ Only these 3 are eagerly loaded — they are small utility components
// Everything else loads only when the user visits that route

// Main pages
const Home         = lazy(() => import('./pages/mainpages/Home'));
const About        = lazy(() => import('./pages/mainpages/About'));
const Services     = lazy(() => import('./pages/mainpages/Services'));
const Portfolio    = lazy(() => import('./pages/mainpages/Portfolio'));
const Contact      = lazy(() => import('./pages/mainpages/Contact'));

// Service pages
const Publishing      = lazy(() => import('./pages/services/Publishing'));
const Ghostwriting    = lazy(() => import('./pages/services/Ghostwriting'));
const Editing         = lazy(() => import('./pages/services/Editing'));
const CoverDesign     = lazy(() => import('./pages/services/CoverDesign'));
const Marketing       = lazy(() => import('./pages/services/Marketing'));
const AudioBook       = lazy(() => import('./pages/services/AudioBook'));
const TimeSquareEvent = lazy(() => import('./pages/services/TimeSquareEvent'));

// Other pages
const Privacy   = lazy(() => import('./pages/others/Privacy'));
const Terms     = lazy(() => import('./pages/others/Terms'));
const Return    = lazy(() => import('./pages/others/Return'));
const Thankyou  = lazy(() => import('./pages/others/Thankyou'));

// Landing pages
const PublishingSolution = lazy(() => import('./pages/lp/PublishingSolution'));


// Simple full-page fallback shown while a route chunk is downloading
// Keep it lightweight — no imports, pure inline styles
function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff'
    }}>
      <div style={{
        width: 36,
        height: 36,
        border: '3px solid #eee',
        borderTop: '3px solid #333',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}


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
    <BrowserRouter>
      <PopupManager />
      <ScrollToTop />
      <Badges/>
      <LiveChatWidget license="19067595" />

      {/* Suspense wraps all routes — shows PageLoader while any chunk downloads */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/about"                     element={<About />} />
          <Route path="/services"                  element={<Services />} />
          <Route path="/portfolio"                 element={<Portfolio />} />
          <Route path="/contact"                   element={<Contact />} />

          <Route path="/publishing-and-distribution"  element={<Publishing />} />
          <Route path="/ghostwriting-&-manuscript"     element={<Ghostwriting />} />
          <Route path="/editing-&-proofreading"        element={<Editing />} />
          <Route path="/coverdesign-&-Illustrations"   element={<CoverDesign />} />
          <Route path="/marketing-&-campaigns"         element={<Marketing />} />
          <Route path="/audiobook"                     element={<AudioBook />} />
          <Route path="/time-square-event"             element={<TimeSquareEvent />} />

          <Route path="/privacy"    element={<Privacy />} />
          <Route path="/terms"      element={<Terms />} />
          <Route path="/return"     element={<Return />} />
          <Route path="/thank-you"  element={<Thankyou />} />

          <Route path="/publishings-solutions" element={<PublishingSolution />} />
        </Routes>
      </Suspense>
      
    </BrowserRouter>
  );
}

export default App;