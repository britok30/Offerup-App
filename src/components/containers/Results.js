import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Results extends Component {
  state = {
    item: {
      // position: { lat: 40.71224017, lng: -73.9796719 }
    }
  };

  updateItem(attr, event) {
    event.preventDefault();

    let updated = Object.assign({}, this.state.item);
    updated[attr] = event.target.value;
    this.setState({
      item: updated
    });
  }

  addItem() {
    // console.log("ADD ITEM: " + JSON.stringify(this.state.item));

    let newItem = Object.assign({}, this.state.item);

    const len = this.props.item.all.length + 1;
    newItem["id"] = len.toString()
    newItem["position"] = this.props.map.currentLocation;
    this.props.addItem(newItem);
  }

  render() {
    const items = this.props.item.all || [];

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-stats">
              <div className="card-footer">
                <div className="container">
                  <h3 style={{ textAlign: "center", paddingTop: 10 }}>
                    Add Item
                  </h3>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    style={localStyle.input}
                    onChange={this.updateItem.bind(this, "name")}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    style={localStyle.input}
                    onChange={this.updateItem.bind(this, "price")}
                  />
                  <hr />
                  <div className="stats">
                    <button
                      onClick={this.addItem.bind(this)}
                      className="btn btn-dark"
                    >
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((item, i) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

const localStyle = {
  input: {
    marginBottom: 12
  }
};

const stateToProps = state => {
  return {
    item: state.item,
    map: state.map
  };
};

const dispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(actions.addItem(item))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Results);
