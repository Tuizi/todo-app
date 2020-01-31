import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTasks } from '../hooks';
import { ITask } from '../models';
import NewTask from './NewTask';
import taskStore from '../store';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const { tasks } = useTasks();

  const renderTask = (task: ITask) => {
    return (
      <ListItem key={task.id}>
        <Checkbox
          edge='start'
          checked={task.complete}
          disabled={task.complete}
          onChange={() => dispatch(taskStore.actions.completeTask(task.id))}
        />
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
