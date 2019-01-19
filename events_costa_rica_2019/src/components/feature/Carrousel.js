import React from 'react';
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true
      };

    return (
        <div className="carrousel_wrapper">
            <Slider {...settings}>
                <div>
                <img alt='' src={slide_one} className="carrousel_image"/>
                </div>
                <div>
                <img alt='' src={slide_two} className="carrousel_image"/>
                </div>
                <div>
                <img alt='' src={slide_three} className="carrousel_image"/>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;