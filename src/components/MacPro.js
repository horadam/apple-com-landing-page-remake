import React, {Component} from 'react'
import VizSensor from 'react-visibility-sensor';

class MacPro extends Component {
    state = {
        imgViz: false,
    }

    render() {
        return (
            <VizSensor
                partialVisibility
                minTopValue={window.outerWidth/4}
                onChange={(isVisible) => {
                this.setState({imgViz: isVisible});
                }}
            >
                <div className="macPro"
                    style={{
                        opacity: this.state.imgViz ? 1 : 0,
                        transition: 'opacity 1000ms linear',
                    }}
                >
                    <div className="macProInnerWrapper">
                        <div className="macProImgWrapper">
                            <h2 className="headline">
                                MacBook Pro 13"            
                            </h2>   
                        </div>
                        <h3 className="subhead"> 
                            The M1&nbsp;chip comes to MacBook&nbsp;Pro. Bringing far more power. Incredible graphics. An&nbsp;advanced Neural&nbsp;Engine for enhanced machine learning. Superfast unified memory. And up to 20 hours of battery life — the longest‑ever battery life in&nbsp;a&nbsp;Mac.                </h3>
                        <p className="availableStartingText">
                            M1 chip models available starting 11.17
                        </p>
                        <div className="twoButtonsWrapper">
                            <a href="https://apple.com" className="seriesButton">
                                Learn more
                            </a>
                            <a href="https://apple.com" className="seriesButton">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
            </VizSensor>
        )
    }
}

export default MacPro;