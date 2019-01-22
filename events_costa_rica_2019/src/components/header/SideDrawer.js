import React from 'react';
import { scroller } from 'react-scroll';
import './SideDrawer.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar'



const SideDrawer = (props) => {
    const uuidv4 = require('uuid/v4');
    const scrollTo = (element) => {
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset: -100
        });
    }
    return (
        <Drawer
        anchor="right" 
        open={props.open} 
        onClose={() => props.onClose(false)}>

            <List component="nav" className="customDrawer">
                {['Events start in', 'Moments BAC', 'HighLights', 'Princing','Location'].map((text, index) => (
                    <ListItem  key={uuidv4(text)} className="item" button onClick={()=> scrollTo(text)}>
                        <ListItemIcon  >{index % 2 === 0 ? <FontAwesomeIcon className="colorIcon1" icon={faMusic} /> : <FontAwesomeIcon className="colorIcon2" icon={faGuitar} />}</ListItemIcon>
                        {text}
                    </ListItem>
                ))}
             </List>
             
        </Drawer>
    );
};

export default SideDrawer;