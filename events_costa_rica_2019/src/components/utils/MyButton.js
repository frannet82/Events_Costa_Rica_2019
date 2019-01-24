import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="1vh"
            style={{
                background: `${props.bck}`,
                color: `${props.color}`,
                fontSize: '2vh',
                padding: '1vh'
            }}
        >
            <img
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            >
            </img>
            {props.text}
        </Button>
    );
};

export default MyButton;