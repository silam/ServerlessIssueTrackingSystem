/* eslint-disable import/no-anonymous-default-export */
import React  from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signOut} from '../../Controllers/Redux/authSlice';
import './sidebar.css';

export default ()=> {
    const dispatch = useDispatch();

    const {auth} = useSelector(state => state);

    function SignOut() {
        dispatch(signOut);
    }
    return (
        <div className="sidebar">
            <Link className="nav-link" to="/" ><h1 className="nav-link">Serverless Issue Tracker System</h1></Link>

            <ul>
                <li>
                    <Link to="/dashBoard" className="nav-link">DashBoard</Link>
                </li>

                <li>
                    <Link to="/viewBugs" className="nav-link">View Bugs</Link>
                </li>

                <li>
                    {auth.admin && <Link to="/createBugs" className="nav-link">Create Bugs</Link>}

                </li>
            </ul>

            <button className="nav-link logout" onClick={SignOut}>Logout</button>
        </div>
    );
}