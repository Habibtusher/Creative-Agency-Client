import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Topbar from '../../Shared/Topbar/Topbar';
const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = event => {
        const imageData = new FormData();
        imageData.set('key', '3ea6925d54a056d4dcb7a26c6292821b');
        console.log(event.target.files[0]);
        imageData.append('image', event.target.files[0])

            axios.post('https://api.imgbb.com/1/upload', 
            imageData)

            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onSubmit = (data) => {
        
        const service = {
            name: data.name,
            description: data.description,
            imageURL: imageUrl
        };
        const url = `https://damp-ocean-55307.herokuapp.com/addServices`


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => {
                console.log('server side');
            })
    }


    return (
        <div >
            <Topbar></Topbar>
           
                <Sidebar></Sidebar>
            
        <section className=" container-fluid row" >
            
            <div className="col-md-9  "  style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Service</h5>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="from-group">
                        <label htmlFor="name">Service Title :</label>

                        <input className="form-control" name='name' {...register("name")} />
                    </div>


                   <div className="from-group">
                   <label htmlFor="description">Description :</label>
                    <input className="form-control" name="description" {...register("description")} />
                   </div>
                   
                   <div  className="from-group mb-3">
                   <label htmlFor="">Upload Image :</label>
                    <input className="form-control" name="exampleRequired" type="file" onChange={handleFileChange} />
                   </div>

                   <button className='' type="submit " className="btn btn-primary">Submit</button>
                </form>

            </div>
        </section>
        </div>
    );
};

export default AddServices;