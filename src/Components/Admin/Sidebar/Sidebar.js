import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCommentDots, faGripHorizontal, faUsers, faUserPlus, faList, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';




const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(loggedInUser.email)
    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
           

            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">

                  {
                      isAdmin ?( <div>
                                              <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                        </Link>
                    </li>


                    <li>
                        <Link to="/addServices" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span>
                        </Link>
                    </li>
                      </div>
                      ) : (
                        <div>
                        <li>
                             <Link to="/doctor/add" className="text-white" >
                                 <FontAwesomeIcon icon={faShoppingCart} />  <span>Book</span>
                             </Link>
     
                         </li>
                         <li>
                             <Link to="/bookingList" className="text-white" >
                                 <FontAwesomeIcon icon={faList} /> <span>Book List</span>
                             </Link>
                         </li>
                         <li>
                             <Link to="/review" className="text-white" >
                                 <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                             </Link>
                         </li>
                        </div>
                      )
                  }

                   
                </ul>
            </div>
        </div>

    );
};

export default Sidebar;