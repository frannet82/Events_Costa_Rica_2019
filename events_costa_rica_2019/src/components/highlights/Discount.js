import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },70)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>  
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th March</h3>
                            <p>We have some of the lowest priced tickets for sale. Ticket prices vary depending on demand and on our inventory, but buy right now and you can get 30% discount for Marco Antonio Solis Concert. So hurry up and get your tickets before there are none left.</p>
                            <MyButton
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#fff"
                            link="http://google.com"
                            />
                        </div>
                    </Slide> 
                </div>
            </div>
        );
    }
}

export default Discount;