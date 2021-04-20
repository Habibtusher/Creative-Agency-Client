import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import Topbar from '../../Shared/Topbar/Topbar';
const ClientReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
     console.log(data);
     const review ={
         name: data.name,
         companyName:data.cName,
         description: data.description ,
         
     };
    const newReview = {...loggedInUser,...review}
     const url = `https://damp-ocean-55307.herokuapp.com/addReview`
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(newReview)
     })
         .then(res => {
             alert("Success")
             console.log('server side');
         })

    }
    return (
        <div>
            <Topbar></Topbar>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Review </h5>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="from-group">
                        <label htmlFor="name">Name :</label>
                        <input className="form-control" {...register("name")} value={loggedInUser.name} />
                    </div>


                    <div className="from-group">
                        <label htmlFor="cName">Company Name :</label> 
                        <input className="form-control" {...register("cName")} placeholder="Company Name" />
                    </div>
                    <div class="from-group">
                    <label htmlFor="description">Description :</label>
                        <textarea class="form-control" {...register("description")} placeholder="description"/>
                    </div>
                    <button type="submit " className="btn btn-primary mt-3">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default ClientReview;