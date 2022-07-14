import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Fsection from "./components/First_section/Fsection";
import Ssection from "./components/Second_section/Ssection";
import ThirdSection from "./components/Third_section/Third_section";
import FourthSection from "./components/Fourth_Section/FourthSection";
import Partners from "./components/Partners/Partners";
import Team from "./components/Team/Team";
import Consultation from "./components/Consultation/Consultation";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Fsection />
      <Ssection />
      <ThirdSection />
      <FourthSection />
      <Partners />
      <Team />
      <Consultation />
      <Footer />
    </div>
  );
};

export default App;
