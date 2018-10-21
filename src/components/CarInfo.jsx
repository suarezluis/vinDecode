import React, { Component } from "react";

class CarInfo extends Component {
  showInfo() {
    document.getElementById("detailed").classList.remove("d-none");
    document.getElementById("moreInfo").classList.add("d-none");
    document.getElementById("lessInfo").classList.remove("d-none");
  }
  hideInfo() {
    document.getElementById("detailed").classList.add("d-none");
    document.getElementById("lessInfo").classList.add("d-none");
    document.getElementById("moreInfo").classList.remove("d-none");
  }

  render() {
    return (
      <div>
        <hr />
        <h6>
          <div className="item center row">
            <span className="right col-sm-4"> Status: </span>
            <span className="left result col-sm-8">
              {this.props.data.ErrorCode}
            </span>{" "}
          </div>
          <div className="item center row">
            <span className="right col-sm-4">Sugested VIN: </span>
            <span className="left result col-sm-8">
              {this.props.data.SuggestedVIN}{" "}
            </span>
          </div>
          <div className="item center row">
            <span className="right col-sm-4">Possible values: </span>
            <span className="left result col-sm-8">
              {this.props.data.PossibleValues}{" "}
            </span>
          </div>
        </h6>
        <hr />
        <h6 className="row">
          <div className="col-sm-3">
            <span className="item">Year:</span>{" "}
            <span className="result">{this.props.data.ModelYear} </span>
          </div>
          <div className="col-sm-3">
            <span className="item">Make:</span>{" "}
            <span className="result">{this.props.data.Make} </span>
          </div>
          <div className="col-sm-3">
            <span className="item">Model:</span>{" "}
            <span className="result">{this.props.data.Model} </span>
          </div>

          <div className="col-sm-3">
            <span className="item">Trim:</span>{" "}
            <span className="result">{this.props.data.Trim} </span>
          </div>
        </h6>
        <hr />
        <h5>
          Detailed Information{" "}
          <span id="moreInfo" className="clickable" onClick={this.showInfo}>
            [+]
          </span>{" "}
          <span
            id="lessInfo"
            className="clickable d-none"
            onClick={this.hideInfo}
          >
            [-]
          </span>
        </h5>
        <div id="detailed" className="row d-none">
          {Object.keys(this.props.data).map(key => {
            if (this.props.data[key] !== "") {
              return (
                <p className="col-sm-3" key={key}>
                  <span className="item">{key}:</span>{" "}
                  <span className="result">{this.props.data[key]}</span>{" "}
                </p>
              );
            }
            return null;
          })}
        </div>
        <hr />
      </div>
    );
  }
}

export default CarInfo;
