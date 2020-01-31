import { ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTasks } from '../hooks';
import { ITask } from '../models';
import NewTask from './NewTask';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(4, 0),
    flexDirection: 'column'
  },
  view: {
    minWidth: 250,
    width: '50%',
    padding: theme.spacing(2)
  }
}));

const Tasks = () => {
  const classes = useStyles();

  const { tasks } = useTasks();

  const renderTask = (task: ITask) => {
    return (
      <ListItem key={task.id}>
        <ListItemText primary={task.text} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant='h1'>TODO</Typography>
      <Paper className={classes.view} elevation={3}>
        <NewTask></NewTask>
        <List>{tasks.map(task => renderTask(task))}</List>
      </Paper>
    </div>
  );
};

export default Tasks;
