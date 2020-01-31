import React, { FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import tasksStore from '../store';

const NewTask = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(tasksStore.actions.newTask('toto'));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField required fullWidth label='Enter a new task...' />
    </form>
  );
};

export default NewTask;
