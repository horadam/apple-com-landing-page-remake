import React, {Component} from 'react'
import VizSensor from 'react-visibility-sensor';

class MacMini extends Component {
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
                <div className="macMini"
                    style={{
                        opacity: this.state.imgViz ? 1 : 0,
                        transition: 'opacity 1000ms linear',
                    }}
                >
                    <div className="macMiniImgWrapper">
                        <h2 className="headline">
                            Mac mini            
                        </h2>
                        <h3 className="subhead"> 
                            The M1&nbsp;chip takes Mac&nbsp;mini to the next level. Incredible performance, speedy graphics, superfast unified memory, and a powerful Neural&nbsp;Engine bring unprecedented capability to our most versatile, do‑it‑all&nbsp;desktop.                
                        </h3>
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

export default MacMini;