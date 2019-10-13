import React, { Component } from "react";
import Map from "../Map";
import { connect } from "react-redux";

export class Search extends Component {
  state = {
    map: null
  };

  centerChanged(center) {
    console.log("centerChanged " + JSON.stringify(center));
  }

  render() {
    const items = this.props.item.all || [];

    return (
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
          locationChanged={this.centerChanged.bind(this)}
          markers={items}
          zoom={14}
          center={{ lat: 40.7224017, lng: -73.9896719 }}
          containerElement={<div style={{ height: 100 + "%" }} />}
          mapElement={<div style={{ height: 100 + "%" }} />}
        />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    item: state.item
  };
};

export default connect(stateToProps)(Search);
