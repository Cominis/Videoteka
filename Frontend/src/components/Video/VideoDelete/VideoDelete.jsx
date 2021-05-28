import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    HeaderButton: {
        "& #HeaderButton": {
            display: 'flex',
            padding: '5px',
            margin: '5px',
        }
    },
}));

function VideoDelete() {
    const classes = useStyles();

    return (
        <div className={classes.HeaderButton}>
            <Button id='HeaderButton' variant='contained'>Empty Trash</Button>
        </div>
    )
}

export default VideoDelete;