import React, { Component } from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import iconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Header extends Component {
    state ={
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handlesScroll);
    }

    handlesScroll = () =>{
     window.scrollY > 0  ? this.setState({headerShow: true}) : this.setState({headerShow: false});
    }

    toggleDrawer = (value) => {
        this.setState({ drawerOpen: value});
    }

    render() {
        return (
            <AppBar style={{backgroundColor: this.state.headerShow ?  'rgb(1, 1, 146)' : 'transparent'}} className='customBar'>
                    <Toolbar>
                        <div className="header_logo">
                            <div className='font_header header_logo_venue'>Events 2019</div>
                            <div className='header_logo_title'>Costa Rica</div>
                        </div>
                        <iconButton 
                        arial-label="Menu" 
                        color="inherint"
                        onClick= {() => this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </iconButton>
                    </Toolbar>

                    <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={(value) => this.toggleDrawer(value)}>
                    </SideDrawer>

            </AppBar>
        );
    }
}

export default Header;