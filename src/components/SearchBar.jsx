import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div className="search center">
        VIN:{" "}
        <div className="input-field inline">
          <input
            className=""
            type="text"
            name="fname"
            value={this.props.term}
            onChange={event =>
              this.props.changeVIN(
                event.target.value
                  .toUpperCase()
                  .trim()
                  .slice(0, 17)
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default Searchbar;
