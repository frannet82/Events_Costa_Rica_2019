import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="hellow"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.861715359735!2d-84.1077296!3d9.9368345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe665ea444f4e47a2!2sEstadio+Nacional+de+Costa+Rica!5e0!3m2!1ses!2scr!4v1548044843389" 
                width="100%" 
                height="500px" 
                frameborder="0"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;