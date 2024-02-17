import React, { useContext } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//import Dialogs from './components/Dialogs/Dialogs';
//import DialogContainer from './components/Dialogs/Dialog/DialogContainer';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { Provider, useDispatch, useSelector } from 'react-redux';
//import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
//import Login from './components/Login/Login';
import { initializeApp } from './redux/reducers/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/store/redux-store';
import { lazy } from 'react';
import { withSuspense } from './hoc/withSuspense';

const Dialogs = withSuspense(lazy(() => import('./components/Dialogs/Dialogs')));
const DialogContainer = withSuspense(lazy(() => import('./components/Dialogs/Dialog/DialogContainer')));
const ProfileContainer = withSuspense(lazy(() => import('./components/Profile/ProfileContainer')));
const UsersContainer = withSuspense(lazy(() => import('./components/Users/UsersContainer')));
const Login = withSuspense(lazy(() => import('./components/Login/Login')));

const App = () => {
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useContext(ThemeContext);

  let initialized = useSelector((state) => state.app.initialized);

  dispatch(initializeApp());

  if (!initialized) {
    return <Preloader />;
  }


  return (
    <div className='app-wrapper'>
      <HeaderContainer theme={toggleTheme} />
      <Navbar />
      <div className={`app-wrapper-content ${theme}`}>
        <Routes>
          <Route path='/dialogs' element={<Dialogs/>} />
          <Route path='/dialogs/:id' element={<DialogContainer/>} />
          <Route path='/profile/:userId?' element={<ProfileContainer/>} />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};

const SamuraiJSApp = () => {
  return <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
}

export default SamuraiJSApp;
