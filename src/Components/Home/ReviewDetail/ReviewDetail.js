import React from 'react';

const ReviewDetail = ({ review }) => {
    return (
        <div className="col-md-4 text-center p-3 mb-4" >
            <div className="">
                <img style={{width:"10%"}} src={review.image} alt=""/>
                <h4>{review.name}</h4>
            </div>
            <h6 class=" mb-2 text-muted">{review.companyName}</h6>
            <p>{review.description}</p>
        </div>
    );
};

export default ReviewDetail;