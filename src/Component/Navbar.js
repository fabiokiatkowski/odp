import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = theme  => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});
const NavBar = (props) => {
  const { classes, show, open } = props;
  const AddModal = (
    <Dialog
      title="Dialog With Actions"
      open={open}
      onClose={show}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Filters</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here we will display the inputs to filter data from database.
          This can, maybe should, be full screen dialog.
        </DialogContentText>
        <TextField
          id="periodStart"
          label="Period Start"
          type="number"
          margin="normal"
          className={classes.textField}
        />
        <TextField
          id="periodEnd"
          label="Period End"
          type="number"
          margin="normal"
          className={classes.textField}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={show} color="primary">
          Cancel
        </Button>
        <Button onClick={show} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Outsourced Dyeing Planning
          </Typography>
          <Button onClick={show}>
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
      {AddModal}
    </div>
  );
}

export default withStyles(styles)(NavBar);