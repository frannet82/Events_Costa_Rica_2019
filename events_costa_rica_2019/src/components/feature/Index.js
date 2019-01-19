import React from 'react';
import Carrousel from './Carrousel';
import CountDown from './CountDown';

const feature = () => {
    return (
        <div style={{position:'relative'}}>
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                Marco Antonio Solis
                </div>
            </div>
            <CountDown/>
        </div>
    );
};

export default feature;