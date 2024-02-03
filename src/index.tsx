

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndividualCurrency from './pages/IndividualCurrency';


import store from './app/store'
import Final from './pages/Final';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/convert',
    element: <IndividualCurrency />
  },
  {
    path: '/Final',
    element: <Final/>
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
