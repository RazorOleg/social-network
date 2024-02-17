import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/redux-store';
import { Provider } from 'react-redux';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import SamuraiJSApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
//   store.dispatch({ type: "FAKE" });
// }, 1000);

root.render(
  <React.StrictMode>
    <SamuraiJSApp />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App2 />
//     </Provider>
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
