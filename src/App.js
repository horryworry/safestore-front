import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import Index from "./components/Index";
import List from "./components/list";
import Brands from "./components/Brands";
import Search from "./components/Search";
import Brand from "./components/Brand";
import StaticPage from "./components/StaticPage";
import Category from "./components/Category";
import Product from "./components/Product";

import store from "./store/store";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

    return (
        <Router>
            <Provider store={store}>
                <div className="app">
                        <Switch>
                            <Route path="/" exact component={List} />
                            <Route path="/index.html" component={Index} />
                            <Route path="/brands.html" component={Brands} />
                            <Route path="/search.html" component={Search} />
                            <Route path="/brand.html" component={Brand} />
                            <Route path="/static-page.html" component={StaticPage} />
                            <Route path="/category-page.html" component={Category} />
                            <Route path="/product-page.html" component={Product} />
                        </Switch>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
