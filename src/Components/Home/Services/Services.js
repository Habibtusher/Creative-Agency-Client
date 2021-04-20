import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://damp-ocean-55307.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <section className="mt-5 service-container">
      <div className="text-center">
        <h1 style={{ color: "#61dfed" }}>Services We Provide</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="w-75 row mt-5 pt-5 ">
          {
            services.map(service => <ServiceDetail service={service}></ServiceDetail>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;