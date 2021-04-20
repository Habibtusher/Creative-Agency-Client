import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar'
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Officers from '../Officers/Officers';
import Review from '../Review/Review';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <Services></Services>
         <Officers></Officers>
         <Review></Review>
         <Contact></Contact>
        </div>
    );
};

export default Home;