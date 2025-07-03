import Orb from "./blocks/Backgrounds/Orb/Orb.jsx";
import Header from "./Header.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
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
  );
}

export default App;
