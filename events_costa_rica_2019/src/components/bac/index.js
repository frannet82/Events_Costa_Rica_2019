import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Icon_calendar from '../../resources/images/icons/calendar.png';
import Icon_location from '../../resources/images/icons/location.png';

const bac = () => {
    const uuidv4 = require('uuid/v4');
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                <Zoom bottom timeout={2000} delay={300}> 
                {[[Icon_calendar,'Event Date & Time','6 April 2019 4:00pm Pacific', 'vn_icon_square bck_red'],[Icon_location,'Event Location','National Stadium Costa Rica', 'vn_icon_square bck_yellow']].map((card, index) => (
                    <div className="vn_item" key={uuidv4(card[1])}>
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className={card[3]} />
                                <div className="vn_icon"
                                         style={{
                                             background: `url(${card[0]})`
                                         }}
                                    >
                                </div>
                                <div className="vn_title">
                                     {card[1]}
                                </div>
                                <div className="vn_desc">
                                     {card[2]}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </Zoom>
                </div>
            </div>
        </div>
    );
};

export default bac;