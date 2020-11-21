import React, {Component} from 'react'
import VizSensor from 'react-visibility-sensor';

class MacAir extends Component {
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
                <div className="macAir"
                    style={{
                        opacity: this.state.imgViz ? 1 : 0,
                        transition: 'opacity 1000ms linear',
                    }}
                >
                        <div className="macAirImgWrapper"> 
                            <h2 className="headline">
                                MacBook Air
                            </h2> 
                            <h3 className="subhead"> 
                                Our thinnest, lightest notebook, supercharged by the M1&nbsp;chip. A&nbsp;powerful Apple CPU. Next‑level graphics. A silent, fanless design with up to 18&nbsp;hours of battery&nbsp;life.            
                            </h3>
                            <p className="availableStartingText">
                                Available starting 11.17
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

export default MacAir;