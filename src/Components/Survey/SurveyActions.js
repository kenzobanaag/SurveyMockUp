/* Contains all the buttons with all the functionality
This might be a beefy js file if we decide to put all of 
the button handlers here. */

/* 
  TODO: Practice on passing in handlers.
        Remove button group, put spacing(1)
        Check to see if grid is needed
        Add configure trigger dialog
        Add embeddable code dialog
*/


import React from 'react';
import DialogTest from '../Modal/ModalTest';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  marginAlign: {
    marginLeft: theme.spacing(1),
  },
}));

export default function SurveyActions(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  const handleAdd = value => {
    props.onAddQuestion({questionText: value.text, questionType: value.type})
  }

  return (
    <Paper className={classes.root}>
      <div>
        <TextField
          id="surveyName"
          className={classes.textField}
          label="Survey Name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </div>
      <Grid container spacing={1} direction="column" alignItems="flex-start">
        <Grid item>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.marginAlign}
            >Publish</Button>
            <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.marginAlign}
            >Save</Button>
        </Grid>
        <Grid item>     
            <Button 
            onClick={handleClickOpen}
            variant="contained"
            color="secondary"
            size="large"
            className={classes.marginAlign}
            >Add Question
            </Button>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.marginAlign}>Configure Trigger</Button>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.marginAlign}>Get Embeddable Code</Button>
        </Grid>
      </Grid>
      <DialogTest open={open} onClose={handleClose} onAdd={handleAdd}/>
    </Paper>
  );
}

//input stuff
/* <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography> */