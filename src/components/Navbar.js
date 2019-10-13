import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo" style={{color: "white", fontSize: 40, fontWeight: 300}}>
              Offerup
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            {/* <form>
              <div className="input-group no-border">
                <input
                  type="text"
                  value=""
                  className="form-control"
                  placeholder="Search..."
                  style={{ color: "black", backgroundColor: "white" }}
                />
                <div className="input-group-append" >
                  <div className="input-group-text" style={{ color: "black", backgroundColor: "white" }}>
                    <i className="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
