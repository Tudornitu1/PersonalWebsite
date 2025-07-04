import Orb from "./blocks/Backgrounds/Orb/Orb.jsx";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen overflow-hidden">
        <div className="orb-container">
          <Orb
            hoverIntensity={3.11}
            rotateOnHover={true}
            hue={0.5}
            forceHoverState={false}
          />
        </div>

        <div className="header-container mt-2 sm:mt-3 md:mt-4">
          <Header />
        </div>

        <div className="content-container">
          <Content />
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
