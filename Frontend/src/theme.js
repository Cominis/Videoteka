import { createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[200],
        },
        secondary: {
            main: orange[200],
        },
    },
});

export default theme;
