import React, { Component } from "react";
import PropTypes from "prop-types";

export class SelectConn extends Component {

  state = {
    connections: {
      C01: {
        port: 102,
        host: "10.136.16.31",
        rack: 0,
        slot: 3
      },
      C02: {
        port: 102,
        host: "10.136.16.32",
        rack: 0,
        slot: 3
      },
      C03: {
        port: 102,
        host: "10.136.16.33",
        rack: 0,
        slot: 3
      },
      C04: {
        port: 102,
        host: "10.136.16.34",
        rack: 0,
        slot: 3
      },
      C05: {
        port: 102,
        host: "10.136.16.35",
        rack: 0,
        slot: 3
      },
      C06: {
        port: 102,
        host: "10.136.16.36",
        rack: 0,
        slot: 3
      },
      C07: {
        port: 102,
        host: "10.136.16.37",
        rack: 0,
        slot: 3
      },
      C08: {
        port: 102,
        host: "10.136.16.38",
        rack: 0,
        slot: 3
      },
      C09: {
        port: 102,
        host: "10.136.16.39",
        rack: 0,
        slot: 3
      },
      C10: {
        port: 102,
        host: "10.136.16.40",
        rack: 0,
        slot: 3
      },
      C11: {
        port: 102,
        host: "10.136.16.41",
        rack: 0,
        slot: 3
      },
      C12: {
        port: 102,
        host: "10.136.16.42",
        rack: 0,
        slot: 3
      }
    }
  };

  onSubmit = e => {
    e.preventDefault();
    // conn, area
    this.props.getData(this.state.connections[e.target.value], e.target.value)
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="submit"
          value="C01"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C02"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C03"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C04"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C05"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C06"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C07"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C08"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C09"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C10"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C11"
          className="btn"
          style={{ flex: "1", marginRight: ".2%" }}
          onClick={this.onSubmit}
        ></input>
        <input
          type="submit"
          value="C12"
          className="btn"
          style={{ flex: "1" }}
          onClick={this.onSubmit}
        ></input>
      </form>
    );
  }
}

// PropTypes
SelectConn.propTypes = {
  getData: PropTypes.func.isRequired
};

export default SelectConn;
