import TextField from '@material-ui/core/TextField';
import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import tasksStore from '../store';

const NewTask = () => {
  const dispatch = useDispatch();
  let text = '';

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(tasksStore.actions.newTask(text));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        required
        fullWidth
        label='Enter a new task...'
        onChange={e => (text = e.target.value)}
      />
    </form>
  );
};

export default NewTask;
