import React from "react";
import icon from "../icon.jpeg";

const Item = props => {
  const item = props.item;

  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row">
            <div className="col-md-12">
              <img src={item.image} alt="" />
            </div>
            <div className="col-md-12">
              <div className="numbers">
                <p className="card-category" style={{paddingTop: 10}}>{item.name}</p>
                <p className="card-title">${item.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer ">
          <hr />
          <img
            style={localStyle.icon}
            src={!item.seller.image ? { icon } : item.seller.image}
            alt=""
          />
          <div className="stats">{item.seller.username}</div>
        </div>
      </div>
    </div>
  );
};

const localStyle = {
  icon: { width: 40, borderRadius: 50, float: "right" }
};

export default Item;
