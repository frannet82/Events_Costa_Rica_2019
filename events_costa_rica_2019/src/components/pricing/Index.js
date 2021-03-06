import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state={
        prices:[100,120,250],
        positions:['Balcony', 'Medium', 'Vip Premium'],
        desc:[
            'Package include amazing poster of Marco Antonio and the best seats between quality and price!',
            'Package include autographed memorabilia from Marco Antonio and amazing custom merchandise!',
            'Package include meet & greets with Marco Antonio, autographed memorabilia, custom merchandise and more!'
        ],
        linkto:['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay:[500,0,500]
    }
    showBoxes = (uuidv4) => (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={uuidv4(this.state.prices[i])} >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    ))

    render() {
        const uuidv4 = require('uuid/v4');
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes(uuidv4)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;