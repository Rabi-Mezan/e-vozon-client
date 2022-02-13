import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from "../Hook/useFirebase"
import "./Navbar.css"

const Navbar = () => {
    const { handleLogout, user } = useFirebase();

    return (
        <div>
            <NavLink className='link' to='/home'>Home</NavLink>

            {user.email ? (
                <button onClick={handleLogout} className="btn btn-danger">
                    LogOut
                </button>
            ) : (
                <NavLink className='link' to='/login'>Login</NavLink>
            )}

            <p className="mb-5">{user.email}</p>
        </div>
    );
};

export default Navbar;