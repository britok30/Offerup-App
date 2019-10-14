import React, { Component } from "react";
import Map from "../Map";
import { connect } from "react-redux";
import actions from "../../store/actions";

export class Search extends Component {
  state = {
    map: null
  };

  centerChanged(center) {
    console.log("centerChanged " + JSON.stringify(center));
    this.props.locationChanged(center);
  }

  render() {
    const items = this.props.item.all || [];

    return (
      <div
        className="sidebar-wrapper"
        style={{
          height: 100 + "%",
          width: 500,
          position: "fixed",
          paddingBottom: 0
        }}
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
          center={this.props.map.currentLocation}
          containerElement={<div style={{ height: 100 + "%" }} />}
          mapElement={<div style={{ height: 100 + "vh"}}/>}
        />
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    item: state.item,
    map: state.map
  };
};

const dispatchToProps = dispatch => {
  return {
    locationChanged: location => dispatch(actions.locationChanged(location))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Search);
