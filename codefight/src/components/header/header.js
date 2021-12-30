import {signOut} from "firebase/auth";
import { auth } from '../../App';
import './header.css'

function Header() {
    const handleLogout = () => {
        signOut(auth).then(() => {});
    }

    return (
        <div className="header box">
            <h1>Code<span className="color-header">Fight</span></h1>
            <button onClick={handleLogout} className='header-item logout-button'>Logout</button>
            <button className='header-item profile'>Profile</button>
        </div>
    )
}

export default Header;