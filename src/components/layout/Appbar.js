import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import ScannerTwoToneIcon from "@material-ui/icons/ScannerTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {Link} from "react-router-dom";
import Logo from "./Logo";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "20px",
    margin: "10px 0px 5px 0px",
    padding: "1px",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  colorInherit: {
    color: "black",
    background: "yellow",
  },
  colorPrimary: {
    color: "black",
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles(props);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        className={classes.colorInherit}
      >
        <Toolbar variant="dense">
          <IconButton
            size="medium"
            aria-label="menuLogo"
            className={classes.menuButton}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
            {props.title}
          </Typography>
          <Logo />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              <HomeTwoToneIcon className={classes.menuButton} />
              Home
            </MenuItem>
            <MenuItem component={Link} to="/aglink" onClick={handleClose}>
              <EmailTwoToneIcon className={classes.menuButton} />
              AG-Link
            </MenuItem>
            <MenuItem component={Link} to="/scanners" onClick={handleClose}>
              <ScannerTwoToneIcon className={classes.menuButton} />
              Scanners
            </MenuItem>
            <MenuItem component={Link} to="/error" onClick={handleClose}>
              <ErrorTwoToneIcon className={classes.menuButton} /> Error Log
            </MenuItem>
            <MenuItem component={Link} to="/bookmarks" onClick={handleClose}>
              <BookmarksTwoToneIcon className={classes.menuButton} /> Bookmarks
            </MenuItem>
            <MenuItem component={Link} to="/hex" onClick={handleClose}>
              <SearchIcon className={classes.menuButton} />
              Hex Parser
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
