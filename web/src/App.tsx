import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Tasks from './tasks/components/Tasks';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Tasks />
      </Provider>
    </>
  );
};

export default App;
