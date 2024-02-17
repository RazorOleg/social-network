import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/auth-reducer';

const Header = (props) => {
    const dispatch = useDispatch();

    return (
        <header className={s.header}>
            HEADER
            <div className={s.loginContainer}>
                <div className={s.login}>
                    {props.auth.isAuth ? <>{props.auth.login} <button onClick={() => {dispatch(logout())}}>Logout</button></> : <NavLink to='/login'>Login</NavLink>}
                    {/* {console.log("authData", props.auth)} */}
                </div>
                <button onClick={props.theme}>Change theme</button>
            </div>
        </header>
    );
};

export default Header;