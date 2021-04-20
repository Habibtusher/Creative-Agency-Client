import React from 'react';
const Officer = ({ officer }) => {
   
    return (
        <div className="col-md-4 text-center">
        <img style={{height:"150px"}} src={officer.img} alt=""/>
        <h5 className="mt-3 mb-3">{officer.name}</h5>
        <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi architecto nemo officia distinctio! Provident, sint.</p>
    
    </div>
    );
};

export default Officer;