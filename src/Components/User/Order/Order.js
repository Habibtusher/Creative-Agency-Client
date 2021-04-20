import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from '../../../App';
import Topbar from '../../Shared/Topbar/Topbar';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://damp-ocean-55307.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        const order = {
            name: data.name,
            email: data.email,
            serviceName: service.name,
            srviceId: id,
            serviceDetail: service.description,
            photo: service.imageURL
        };
        const newOrder = { ...order }
        const url = `https://damp-ocean-55307.herokuapp.com/addOrder`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                console.log('server side');
            })
    }

    return (
        <div>
            <Topbar></Topbar>
            <div>
                <Sidebar></Sidebar>
                <div className="col-md-9 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Book</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="from-group">
                            <label htmlFor="name">Name :</label>

                            <input className="form-control" {...register("name")} value={loggedInUser.name} />
                        </div>


                        <div className="from-group">
                            <label htmlFor="email">Email :</label>
                            <input className="form-control" {...register("email")} value={loggedInUser.email} />
                        </div>

                        <div className="from-group">
                            <label htmlFor="email">Email :</label>
                            <input className="form-control" {...register("sName")} value={service.name} />
                        </div>

                        <button type="submit " className="btn btn-primary mt-3">Get Now</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Order;