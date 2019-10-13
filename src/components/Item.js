import React from "react";

const Item = props => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row">
            <div className="col-5 col-md-4">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-globe text-warning"></i>
              </div>
            </div>
            <div className="col-7 col-md-8">
              <div className="numbers">
                <p className="card-category">Capacity</p>
                <p className="card-title">150GB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer ">
          <hr />
          <div className="stats">
            <i className="fa fa-refresh"></i> Update Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
