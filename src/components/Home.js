import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import ScannerTwoToneIcon from "@material-ui/icons/ScannerTwoTone";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import React, {Component} from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Card from "./Card";

// import FlightTakeoffTwoToneIcon from "@material-ui/icons/FlightTakeoffTwoTone";

export class Home extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      border: "1px dashed #BBB",
      margin: "5px auto",
      color: "#555",
      minHeight: "85vh",
    };
  };

  render() {
    if (this.props.loading === true) {
      return (
        <div style={this.getStyle()}>
          <PropagateLoader
            css={this.props.css}
            size={35}
            color={"#D2D2D2"}
            loading={this.props.loading}
          />
        </div>
      );
    } else if (this.props.error !== undefined) {
      return <h2 style={this.getStyle()}>{this.props.error}</h2>;
    } else if (this.props.home === true) {
      return (
        <h2 style={this.getStyle()}>
          <Card
            to="/aglink"
            primary="AG-Link"
            icon={<EmailTwoToneIcon style={{ fontSize: "38px" }} />}
          />
          <Card
            to="/scanners"
            primary="Scanner Data"
            icon={<ScannerTwoToneIcon style={{ fontSize: "38px" }} />}
          />
          <Card
            to="/error"
            primary="Error Log"
            icon={<ErrorTwoToneIcon style={{ fontSize: "38px" }} />}
          />
          {/* <Card */}
          {/*   to="/blockade" */}
          {/*   primary="Blockade Checklist" */}
          {/*   icon={<SearchTwoToneIcon style={{ fontSize: "38px" }} />} */}
          {/* /> */}
          <Card
            to="/bookmarks"
            primary="Bookmarks"
            icon={<BookmarksTwoToneIcon style={{ fontSize: "38px" }} />}
          />
          <Card
            to="/hex"
            primary="Matrix Hex parser"
            icon={<SearchTwoToneIcon style={{ fontSize: "38px" }} />}
          />
        </h2>
      );
    } else {
      return (
        <h2 style={this.getStyle()}>
          <div>Select a connection from above to read from the PLC</div>
        </h2>
      );
    }
  }
}

export default Home;
