import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Layout from './components/Layout/Layout';
import SnackbarContext from './context/SnackbarContext';
import Snackbar from './components/Snackbar';
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
    };

    return (
        <MuiThemeProvider theme={theme}>
            <SnackbarContext.Provider value={{ showMessageSnackbar, changeSnackbarOpen }}>
                <div className="App">
                    <CssBaseline />
                    <Snackbar
                        message={snackbarMessage}
                        severity={snackbarSeverity}
                        open={snackbarOpen}
                    />
                    <Layout />
                </div>
            </SnackbarContext.Provider>
        </MuiThemeProvider>
    );
}

export default App;
