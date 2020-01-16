import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Header from "./components/header/Header";
import Banner from "./components/index/Banner";
import Advantages from "./components/index/Advantages";
import Hits from "./components/index/Hits";
import Information from "./components/index/Information";
import About from "./components/index/About";
import Footer from "./components/footer/Footer";

const store = createStore(() => [], {}, applyMiddleware());

function App() {

    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Banner />
                <Advantages/>
                <Hits/>
                <Information/>
                <About/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;