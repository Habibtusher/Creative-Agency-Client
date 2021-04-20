import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import Topbar from '../../Shared/Topbar/Topbar';
const AddAdmin = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {

        const newDoctor = {
            email: data.email,
        };
        const url = `https://damp-ocean-55307.herokuapp.com/addAdmin`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDoctor)
        })
            .then(res => {
                console.log('server side');
            })
    }

    return (
        <div>
            <Topbar></Topbar>
           

                <Sidebar></Sidebar>
            
            <section className="container-fluid row">

                <div className="col-md-9 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Admin</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="from-group mb-3">
                            <label htmlFor="email">Enter Email :</label>

                            <input className="form-control" name='email' {...register("email")} />
                        </div>

                        <button type="submit " className="btn btn-primary">Add Admin</button>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default AddAdmin;