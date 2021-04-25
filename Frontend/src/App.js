import { Button, MuiThemeProvider } from "@material-ui/core";
import VideoContainer from "./Video";
import AccordionTest from "./Drawer/ContentAccordion";
import Drawer from "./Drawer/Drawer";
import theme from "./theme";

function App() {
  const videoPlayerOptions = (src, type) => ({
    autoplay: false,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    width: 768,
    height: 432,
    controls: true,
    sources: [
      {
        src,
        type,
      },
    ],
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Drawer>
        <div className="App">
          <AccordionTest />
          <VideoContainer
            playerOptions={videoPlayerOptions(
              "videoteka-video.mp4",
              "video/mp4"
            )}
          />
          <Button variant="contained" color="primary">
            Share
          </Button>
        </div>
      </Drawer>
    </MuiThemeProvider>
  );
}

export default App;
