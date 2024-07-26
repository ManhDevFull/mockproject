import { FaUserAlt } from "react-icons/fa"
import { MdKey } from "react-icons/md"
import { Link } from 'react-router-dom'
import './Scss/Style.scss'
function FormLogin() {
    return (
        <>
            <div className="formLogin">
                <form>
                    <p>
                        <label htmlFor='userName'><FaUserAlt /></label>
                        <input id="userName" name="userName" type='text' placeholder="Username" />
                    </p>
                    <p>
                        <label htmlFor='passWord'><MdKey /></label>
                        <input id='passWord' name='passWord' type='text' placeholder="Password" />
                    </p>
                    <p>
                        <input id="remember" name="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me</label>
                    </p>
                    <button>Sign In</button>
                </form>
                <div className="signUp">
                    <Link to='/forgot-password'>Forgot password</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </>
    )
}
export default FormLogin