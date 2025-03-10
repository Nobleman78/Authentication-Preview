
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import './Navbar.css'

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    {
        if (isDropdownOpen) {
            console.log('Button Clicked')
        }
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    const handleSignOut = () => {
        signOutUser();
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        {
            user && <>
                <li><NavLink to="/order">Orders</NavLink></li>


            </>

        }


        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>


    </>
    return (
        <div className=" pt-3 navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <>
                        <div className="profile-dropdown relative">
                            <a className="me-6" onClick={toggleDropdown}><NavLink to="/profile">My Account</NavLink></a>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <ul>
                                        <li>Email : {user.email}</li>


                                    </ul>
                                </div>
                            )}
                        </div>
                    </>

                }
                {
                    user ?
                        <>

                            <a onClick={handleSignOut} className="btn">Sign Out</a>
                        </>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;