import { Link } from "react-router-dom"
import user from '../../Assets/user.jpg'
import './Scss/Style.scss'
function HeaderPage() {
    return (
        <>
            <header className="header">
                <h1 className="headerLogo">
                    <Link to='/'>LOGO</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/services'>Our Services</Link>
                        </li>
                        <li>
                            <Link to='about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='contact'>Contact Us</Link>
                        </li>



                    </ul>
                </nav>
                <div className="headerUser">
                    <img src={user} alt='User' />
                </div>
            </header>
        </>
    )
}
export default HeaderPage