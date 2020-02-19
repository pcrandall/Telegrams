import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "@emotion/core";
import axios from "axios";
import Header from "./components/layout/Header";
import SelectConn from "./components/SelectConn";
import About from "./components/pages/About";
import { TT13Table } from "./components/Table";

import "./App.css";
class App extends Component {

  state = {
    area: undefined,
    data: undefined,
    options: {},
    loading: false,
  };

  makeTable = (plcData, area) => {
    this.setState({
      area: area,
      data: plcData,
      options: {
        maxBodyHeight: "60vh", // makes the headers fixed if the body size is larger. 
        paging: true,
        pageSize: 10,
        search: true,
        grouping: true,
        sorting: false,
        headerStyle: {
          backgroundColor: "#555",
          color: "#FFF",
          textAlign: "center"
        },
        cellStyle:{
          textAlign: "center"
        }
      },
      loading: false
    });
  };

  // Select Connection
  getData = (conn, area) => {
    this.setState({ loading: true });
    axios
      .get("http://localhost:8080/TT13/connect", {
        params: {
          conn: conn
        }
      })
      .then(res => {
        this.makeTable(res.data, area);
        //console.log(res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {

    const override = css`
      margin: 300px 50%;
      display: block;
      border-color: #d2d2d2;
    `;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header 
              title={'TT13 Data'}
            />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <SelectConn getData={this.getData} />
                  <TT13Table
                    area={this.state.area}
                    data={this.state.data}
                    options={this.state.options}
                    key={this.state.key}
                    loading={this.state.loading}
                    css={override}
                  />
                </React.Fragment>
              )}
            ></Route>{" "}
            <Route path="/about" component={About}></Route>{" "}
          </div>{" "}
        </div>{" "}
      </Router>
    );
  }
}

export default App;
