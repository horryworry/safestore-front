import React, {Fragment} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Banner from "./components/index/Banner";
import Advantages from "./components/index/Advantages";
import Hits from "./components/index/Hits";
import Information from "./components/index/Information";
import About from "./components/index/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Advantages/>
      <Hits/>
      <Information/>
      <About/>
      <Footer/>
    </Fragment>
  );
}

export default App;
