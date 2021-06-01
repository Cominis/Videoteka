import React, { useState } from "react";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import VideoUpload from "../Video/VideoUpload/VideoUpload";
import VideoDelete from "../Video/VideoDelete/VideoDelete";

const useStyles = makeStyles(() => ({
  HeaderContent: {
    marginLeft: "20px",
    height: "120px",
    borderBottom: "2px solid black",
  },
  SearchBar: {
    marginTop: "20px",
    width: "70%",
  },
  HeaderButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  HeaderButton: {
    "& #HeaderButton": {
      display: "flex",
      padding: "5px",
      margin: "5px",
    },
  },
  FolderName: {
    margin: "0px",
    whiteSpace: "nowrap",

  },
  ToolbarAdjustment: {
    "& #ToolbarAdjustment": {
      marginTop: "15px",
      minHeight: "50px",
      padding: "0px 16px 0px 0px",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  function toggleDrawer() {
    props.setInfo(!props.info);
  }

  return (
    <div>
      <div className={classes.HeaderContent}>
        <div>
          <SearchBar className={classes.SearchBar} />
        </div>

        <div className={classes.ToolbarAdjustment}>
          <Toolbar id="ToolbarAdjustment">
            <h1 className={classes.FolderName}> {props.folderName} </h1>

            <div className={classes.HeaderButtons}>
              {props.folderName === "Trash" ? <VideoDelete /> : <VideoUpload />}

              <div className={classes.HeaderButton}>
                <Button
                  id="HeaderButton"
                  variant="contained"
                  onClick={toggleDrawer}
                >
                  Info
                </Button>
              </div>
            </div>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
