import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class CountDown extends Component {

    state = {
        deadline: 'April 6, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0){
            console.log('Date passed')
        }
        else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));
            this.setState({days,hours,minutes,seconds});
        }

    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline),500)
    }

    render() {
        const uuidv4 = require('uuid/v4');
        return (
            <div className="countdown_wrapper">
                <Slide left timeout={2000} delay={500}>
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                {[[this.state.days,'Days'], [this.state.hours,'Hrs'],  [this.state.minutes,'Min'],  [this.state.seconds,'Sec']].map((text, index) => (
                    <div className="countdown_item" key={uuidv4(text[0])}>
                        <div className="countdown_time">
                            {text[0]}
                        </div>
                        <div className="countdown_tag">
                            {text[1]}
                        </div>
                    </div>
                ))}
                </div>
                </Slide> 
            </div>
        );
    }
}

export default CountDown;