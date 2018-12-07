import React, { Component } from "react";
import "./App.css";
import { TabArea, Tab } from "./Tabs.js";
import Altima from "./media/Altima.jpg";
import Acura from "./media/Acura.jpg";
import Fusion from "./media/Fusion.jpg";
import A3 from "./media/A3.jpg";
import A4 from "./media/A4.jpg";
import A5 from "./media/A5.jpg";
import Hun from "./media/Hun.jpg";
import Max from "./media/Maxima.jpg";
import Maz from "./media/Mazda.jpg";
import Maz2 from "./media/Mazda2.jpg";
import Merc from "./media/merc.jpg";
import Acc from "./media/Acc.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabArea>
          <Tab id="one" title=" '04 Altima">
            <h1>2004 Nissan Altima</h1>
            <img src={Altima} className="all" alt="Altima" />
            <p>Odometer: 118,100mi</p>
            <p>Asking Price: $3,800</p>
            <p>$3000 is the highest I will pay.</p>
            <a
              href="https://chicago.craigslist.org/wcl/cto/d/loaded-one-owner-2004-nissan/6764871988.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="two" title=" '07 Montego">
            <h1>2007 Mercury Montego</h1>
            <img src={Merc} className="all" alt="Mercury" />

            <p>Odometer: 148,000mi</p>

            <p>Asking Price: $2,400</p>
            <p>I think I can talk them down to $2,000</p>
            <a
              href="https://chicago.craigslist.org/sox/cto/d/2007-mercury-montego-premier/6767033491.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="three" title=" '09 Fusion">
            <h1>2009 Ford Fusion</h1>
            <img src={Fusion} className="all" alt="Fusion" />

            <p>Odometer: 102,000mi</p>

            <p>Asking Price: $3,200 (negotiable)</p>
            <p>$2500 is the highest I'll go.</p>
            <a
              href="https://chicago.craigslist.org/chc/cto/d/2009-ford-fusion-limited/6765783423.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="four" title=" '05 Altima">
            <h1>2005 Altima</h1>
            <img src={A3} className="all" alt="Tima" />

            <p>Odometer: 118,000mi</p>
            <p>Asking Price: $2,100</p>
            <p>Due to the condition, I will not pay more than $1800.</p>
            <a
              href="https://chicago.craigslist.org/wcl/cto/d/2005-nissan-altima-25l-only/6766223417.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="five" title=" '08 Mazda 6">
            <h1>2008 Mazda 6</h1>
            <img src={Maz} className="all" alt="Mazda" />

            <p>Odometer: 101,833mi</p>

            <p>Asking Price: $2,400</p>
            <p>I can talk 'em down to $2,000</p>
            <a
              href="https://chicago.craigslist.org/chc/cto/d/2008-mazda-6-sport/6764866407.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="six" title=" '04 Mazda 3">
            <h1>2004 Mazda 3</h1>
            <img src={Maz2} className="all" alt="Mazda2" />

            <p>Odometer: 88,000mi</p>

            <p>Asking Price: $2,600</p>
            <p>I can talk 'em down to $2,000</p>
            <a
              href="https://chicago.craigslist.org/nwc/cto/d/2004-mazda-3/6765478602.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="seven" title=" '05 Maxima">
            <h1>2005 Nissan Maxima</h1>
            <img src={Max} className="all" alt="Maxima" />

            <p>Odometer: 120,000mi</p>

            <p>Asking Price: $2,750</p>
            <p> I will not pay the asking price for any of these vehicles.</p>
            <a
              href="https://chicago.craigslist.org/chc/cto/d/2005-nissan-maxima/6766749122.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
          <Tab id="eight" title=" '10 Accord">
            <h1>2010 Honda Accord</h1>
            <img src={Acc} className="all" alt="Accord" />

            <p>Odometer: ?</p>

            <p>Asking Price: $2,000</p>
            <p> This car might be perfect!</p>
            <a
              href="https://chicago.craigslist.org/chc/cto/d/2010-honda-accord-white-satin/6767033471.html"
              target="_blank"
            >
              Click For Source
            </a>
          </Tab>
        </TabArea>
      </div>
    );
  }
}

export default App;
