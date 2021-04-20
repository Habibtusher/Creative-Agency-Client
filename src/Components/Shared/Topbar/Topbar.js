import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './Topbar.css'
const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="topbar">
            <div style={{ height: "80px", width: "80%", margin: '0 auto'}} className="row">
                <div className="col-md-10">
                    <h2>Creative <br /> Agency</h2>
                </div>
                <div className="col-md-2 mt-4">
                    <h4>{loggedInUser.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Topbar;