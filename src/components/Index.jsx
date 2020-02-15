import React, {Component, Fragment} from 'react';

import Header from "./header/Header";
import Banner from "./index/Banner";
import Advantages from "./index/Advantages";
import Hits from "./index/Hits";
import Information from "./index/Information";
import About from "./index/About";
import Footer from "./footer/Footer";

function Index() {
    return(
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

export default Index;
