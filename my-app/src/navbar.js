import {Link, Route} from "react-router-dom";
import Home from  './home'
import signupFormComponent from './signup'
import loginFormComponent from './login'
import Hook from './Hook'

function NavBar() {
    return(
        <div>  
            <Link to="/">Home</Link> &nbsp;
            <Link to="/login">Login</Link> &nbsp;
            <Link to="/signup">Signup</Link> &nbsp;
            <Link to="/Hook">Hook</Link>
  
            <Route path="/login" component={loginFormComponent} />
            <Route path="/signup" component={signupFormComponent} />
            <Route path="/Hook" component={Hook} />
            <Route path="/" component={Home} />


        </div>
    );
}

export default NavBar