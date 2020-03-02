import React from 'react';
import Router from './components/Router/RouterContainer';
import store from './store/index';

import { Provider } from 'react-redux';

const App = () => (
  <section className={'main'}>
    <Provider store={store}>
      <Router/>
    </Provider>
  </section>
);

export default App;