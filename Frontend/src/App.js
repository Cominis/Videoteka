import { Button, MuiThemeProvider } from "@material-ui/core";
import VideoContainer from "./Video";
import theme from "./theme";
import Layout from './components/Layout/Layout'
import CssBaseline from '@material-ui/core/CssBaseline';

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
            <div className="App">
                <CssBaseline/>
                <Layout/>                
                {/*
                <VideoContainer playerOptions={videoPlayerOptions('videoteka-video.mp4', 'video/mp4')}/>
                <Button variant="contained" color="primary">Share</Button>
                */}
            </div>
        </MuiThemeProvider>
    );
}

export default App;
