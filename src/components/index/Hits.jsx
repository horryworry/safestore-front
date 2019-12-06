import React, { Component } from 'react';
import Tabs from "./Tabs/Tabs";
import Benefits from "./Tabs/Benefits";
import New from "./Tabs/New";
import Hit from "./Tabs/Hits";

class Hits extends Component {

    render() {
        return(

            <Tabs>
                <div label="Хиты продаж">
                    <div className="tab tab-hits">
                        <Hit/>
                    </div>
                </div>
                <div label="Выгодно">
                    <div className="tab tab-benefits">
                        <Benefits/>
                    </div>
                </div>
                <div label="Новинки">
                    <div className="tab tab-new">
                        <New/>
                    </div>
                </div>
            </Tabs>

        );
    }
}

export default Hits;
