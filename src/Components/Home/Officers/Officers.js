import React from 'react';
import Officer from '../Officer/Officer';
import one from '../../../images/1.jpg'
import two from '../../../images/2.jpg'
import three from '../../../images/3.png'
const officers = [
    {
        name: 'Gent Bhumi',
        img: three
    },
    {
        name: 'GK Verma',
        img: one
    },
    {
        name: 'Shiva Nayak',
        img: two
    }
]
const Officers = () => {
    return (
        <div class="row mt-4">
            <h2 style={{ color: "#61dfed" }} className='text-center mt-3 mb-5'>Experienced Officers</h2>
          
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5 sd">
                        {
                            officers.map(officer => <Officer officer={officer} ></Officer>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default Officers;