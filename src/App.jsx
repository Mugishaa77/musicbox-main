import "../src/styles/styles.scss";
import { LandingPage } from "./components/LandingPage";
import bg from "../src/assets/bg-headphones.jpg";
import { Navbar } from "./components/Navbar";
import { Hero } from '../src/components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <div
        className="m-4 p-5 rounded 4 h-100"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <LandingPage />
      </div>
      <Hero />
    </>
  );
}

export default App;
