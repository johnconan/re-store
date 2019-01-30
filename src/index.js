import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { BookstoreServiceProvider } from './components/bookstore-services-context/bookstore-services-context';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import App from './components/app';

import store from './store';

const bookstoreService = new BookstoreService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);