import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, Component } from "react"
import { AuthContext, isLoggedIn } from '../../contexts/auth'
import firebase from 'gatsby-plugin-firebase'
import { FaCartArrowDown } from "react-icons/fa";
import logo from '../../images/1.webp';

//const { user } = useContext(AuthContext)

class Header extends Component {
    state = {
        navbaropen: false,
        css: 'collapse navbar-collapse',
    }
    abc = () => {
        var loggedIn = isLoggedIn(AuthContext) 
        
        return loggedIn

    }
    handleLogout = async () => {
        await firebase.auth().signOut()
        navigate("/login")
    }
    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
            : this.setState({
                navbarOpen: true,
                css: "collapse navbar-collapse show"
            });
    };
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to="/" className='navbar-brand'>
                    <img src={logo} alt="logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">
                        { !!this.abc ?
                            (
                                <>
                                    <li>
                                        <Link to="/register" className="nav-link text-capitalize">
                                            Register
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="nav-link text-capitalize">
                                            Login
                                    </Link>
                                    </li>
                                </>
                            ) :
                            (
                            <>
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link text-capitalize">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item ml-sm-5">
                                        <FaCartArrowDown className="cart-icon snipcart-checkout" />
                                    </li>
                                    <li>
                                    <Link to="#1" className="nav-link text-capitalize" onClick={this.handleLogout}>
                                            Logout
                                        </Link>
                                    </li>
                                </>

                            )

                        }
                    </ul>   
                    
                    
                </div>
            </nav>

        )
    }
}

export default Header