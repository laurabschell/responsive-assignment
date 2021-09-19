import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import PricesSection from "./components/PricesSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import HamburgerToggle from "./components/HamburgerToggle";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      <HamburgerToggle handleToggle={handleToggle} />
      {toggleForm && <Form />}
      <Navbar />
      <HeaderSection />
      <FeaturesSection />
      <VideoSection />
      <PricesSection />
      <Footer />
    </>
  );
}

export default App;
