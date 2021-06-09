import React from 'react';


import services from '../photos/services.jpg';
import homePage from '../photos/homepage.jpg';
import FlowerBack from '../photos/flowerBack.jpg';
import MaskSpa from '../photos/maskSpa.jpg';
import MessageSpa from '../photos/messageSpa.jpg';
import CumberEyes from '../photos/cumberEyes.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {
    return (
        <div className="homePage">
        <Carousel>
                <div>
                    <img src={FlowerBack} />
                </div>
                <div>
                    <img src={CumberEyes} />
                </div>
                <div>
                    <img src={MaskSpa} />
                </div>
                <div>
                    <img src={MessageSpa} />
                </div>
      </Carousel>
      <div className="sectionOne">
      <div className="homeContentThree">
            <h1>Relax.</h1>
            <h1>Rejuvinate.</h1>
            <h1>Breathe.</h1>
      </div>
      <div className="homeContentTwo">
            <p>Invest in yourself</p>
            <p>Indulge in Selfcare</p>
            <p>Invite Peace and Serenity</p>
      </div>
      </div>
      <div className="homeContent">
        <a href="http://localhost:3000/ServiceMenu" className="sM">
        <img src={services} alt="hands"/> Services
        </a>
        <img src={homePage} alt="spa" />
       </div>
       </div>
    );
};

export default HomePage;