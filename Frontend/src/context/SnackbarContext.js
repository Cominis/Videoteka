import React from 'react';

const SnackbarContext = React.createContext({
    showMessageSnackbar: () => {},
    changeSnackbarOpen: () => {},
});

export default SnackbarContext;
