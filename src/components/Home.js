import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Item from "./Item";
import Map from "./Map";

class Home extends Component {
  state = {
    map: null
  };

  render() {
    const markers = [
      {
        id: 1,
        key: "1",
        defaultAnimation: 2,
        label: "Nike Jordans",
        position: { lat: 40.7224017, lng: -73.9896719 }
      },
      {
        id: 2,
        key: "2",
        defaultAnimation: 2,
        label: "iPhone 11 Pro",
        position: { lat: 40.71224017, lng: -73.9896719 }
      },
      {
        id: 3,
        key: "3",
        defaultAnimation: 2,
        label: "60 Inch 4K TV",
        position: { lat: 40.70224017, lng: -73.9796719 }
      },

    ];

    return (
      <div>
        <div className="wrapper ">
          <div
            className="sidebar"
            data-color="white"
            data-active-color="danger"
          >
            <div
              className="sidebar-wrapper"
              style={{ height: 1750, width: 500, position: "fixed" }}
            >
              <Map
                onMapReady={map => {
                  if (this.state.map != null)
                    return console.log(
                      "OnMapReady: " + JSON.stringify(map.getCenter())
                    );
                  this.setState({
                    map: map
                  });
                }}
                markers={markers}
                zoom={14}
                center={{ lat: 40.7224017, lng: -73.9896719 }}
                containerElement={<div style={{ height: 100 + "%" }} />}
                mapElement={<div style={{ height: 100 + "%" }} />}
              />
            </div>
          </div>

          <div className="main-panel">
            <Navbar />

            <div className="content">
              <div className="row">
                <Item />
                <Item />
              </div>
              <div className="row">
                <Item />
                <Item />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
