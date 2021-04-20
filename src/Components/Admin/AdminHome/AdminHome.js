import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect } from 'react';
import { useState } from 'react';
import Topbar from '../../Shared/Topbar/Topbar';
const AdminHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    const deleteProduct = id => {
        fetch(`https://damp-ocean-55307.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {

            })
    }

    return (
        <div>
            <Topbar></Topbar>
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-5">

                    <div className="row mb-4">
                        <div className="col-md-2">
                            <th className="text-secondary" scope="col">Name</th>
                        </div>
                        <div className="col-md-7">
                            <th className="text-secondary" scope="col">Description</th>
                        </div>
                        <div className="col-md-2">
                            <th className="text-secondary" scope="col">Manage</th>
                        </div>
                    </div>

                    {
                        services.map((service, index) =>

                            <div className="row mb-3">
                                <div className="col-md-2">
                                    {service.name}

                                </div>
                                <div className="col-md-7">
                                    {service.description}

                                </div>
                                <div className="row col-md-2">
                                    <div className="col-md-4">
                                        <button className="btn btn-primary ">Edit</button>
                                    </div>
                                    <div className="col-md-4"><button onClick={() => deleteProduct(service._id)} className="btn btn-primary mb-3">Delete</button></div>

                                </div>
                            </div>
                        )
                    }


                </div>

            </div>
        </div>

    );
};

export default AdminHome;