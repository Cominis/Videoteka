import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import formatBytes from "services/formatBytes";
import { deleteVideo, moveToTrash } from "clients/videoClient";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  paper: {
    width: 250,
    position: "absolute",
    backgroundColor: "rgb(220,220,220)",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentImage: {
    alignSelf: "center",
    marginTop: 50,
    width: 240,
  },
  contentTitle: {
    marginLeft: 10,
    width: 220,
  },
  contentInfo: {
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  deletBtn: {
    width: 180,
    marginLeft: -20,
    marginBottom: 50,
    alignSelf: "center",
    "&:hover": {
      backgroundColor: "tomato",
    },
  },
}));

function InformationPanel(props) {
  const classes = useStyles();

  const selectedVideo = props.selected;
  const hasVideo = !!selectedVideo?.id;

  let location = useLocation();
  console.log(location);

  const handleMoveToTrash = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectedVideo?.id) {
      moveToTrash(selectedVideo.id);
      props.onRemoveVideo(selectedVideo.id);
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectedVideo?.id) {
      deleteVideo(selectedVideo.id);
      props.onRemoveVideo(selectedVideo.id);
    }
  };
  let destructiveButton = null;
  if (location.pathname == "/trash") {
    destructiveButton = (
      <Button
        className={classes.deletBtn}
        variant="contained"
        onClick={handleDelete}
      >
        Delete video
      </Button>
    );
  } else {
    destructiveButton = (
      <Button
        className={classes.deletBtn}
        variant="contained"
        onClick={handleMoveToTrash}
      >
        Move to Bin
      </Button>
    );
  }

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="right"
        open={props.open}
        BackdropProps={{ open: false }}
        classes={{
          paper: classes.paper,
          modal: classes.modal,
        }}
      >
        {hasVideo ? (
          <div className={classes.content}>
            <img
              className={classes.contentImage}
              src={selectedVideo.thumbnail}
              alt="video-thumbnail"
            />
            <h2 className={classes.contentTitle}>{selectedVideo.title}</h2>

            <div className={classes.contentInfo}>
              <div>
                <p>
                  <b>ID:</b> {selectedVideo.id}
                </p>
                <p>
                  <b>Date uploaded: </b>
                  {new Date(selectedVideo.dateUploaded).toDateString()}
                </p>
                <p>
                  <b>Size: </b> {formatBytes(selectedVideo.sizeInBytes)}
                </p>
              </div>
              {destructiveButton}
            </div>
          </div>
        ) : (
          <div>
            <h2>No video selected</h2>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default InformationPanel;
