import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./containers/Search";
import Results from "./containers/Results";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper ">
          <div
            className="sidebar"
            data-color="white"
            data-active-color="danger"
          >
            <Search />
          </div>
          <div className="main-panel">
            <Navbar />
            <div className="content">
              <Results />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
