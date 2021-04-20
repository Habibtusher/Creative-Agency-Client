import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mt-5 h1Style'>Client  <span style={{ color: "#61dfed" }}>Feedback</span></h2>

            <div className="row mt-5" style={{ width: "80%", margin: "0 auto" }}>
                {
                    review.map(review => <ReviewDetail review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Review;