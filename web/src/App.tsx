import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
      </Provider>
    </>
  );
};

export default App;
