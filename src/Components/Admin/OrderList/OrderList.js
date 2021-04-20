import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
const OrderList = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <Topbar></Topbar>
            <div className="row">
                <div className="col-md-2">
                <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service, index) =>

                                    <tr>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.serviceName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;