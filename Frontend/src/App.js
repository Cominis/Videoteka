import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Layout from './components/Layout/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import SnackbarContext from './context/SnackbarContext';
import Snackbar from './components/Snackbar';
import { useState } from 'react';
import { SEVERITY_SUCCESS } from './constants';

function App() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(SEVERITY_SUCCESS);
    const changeSnackbarOpen = (open) => setSnackbarOpen(open);

    const showMessageSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity === undefined ? SEVERITY_SUCCESS : severity);
        setSnackbarOpen(true);
    }

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
            <SnackbarContext.Provider value={{ showMessageSnackbar, changeSnackbarOpen }}>
                <div className='App'>
                    <CssBaseline/>
                    <Snackbar message={snackbarMessage} severity={snackbarSeverity} open={snackbarOpen}/>
                    <Layout/>
                </div>
            </SnackbarContext.Provider>
        </MuiThemeProvider>
    );
}

export default App;
