import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasksLoadingStatus,
  selectTasksError,
  selectTasks
} from './selectors';
import { useEffect } from 'react';
import tasksStore from './store';

export const useTasks = () => {
  const isLoading = useSelector(selectTasksLoadingStatus);
  const error = useSelector(selectTasksError);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksStore.actions.listTask());
  }, [dispatch]);

  return { tasks, isLoading, error };
};
