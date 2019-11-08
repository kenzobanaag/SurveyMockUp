
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
}));

export default function SurveyActions() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div>
        <TextField
          id="surveyName"
          className={classes.textField}
          label="Unnamed Survey"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </div>

      <Grid container spacing={1} direction="column" alignItems="flex-start">
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="large"
            aria-label="full width contained secondary button group"
          >
            <Button>Publish</Button>
            <Button>Save</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup
            variant="contained"
            color="secondary"
            size="large"
            aria-label="full width contained secondary button group"
          >
            <Button>Add Question</Button>
            <Button>Configure Trigger</Button>
            <Button>Get Embeddable Code</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
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