import React from 'react'

const MacAir = () => {
    return (
        <div className="macAir">
            {/* <div className="macAirInnerWrapper"> */}
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
                
            {/* </div> */}
        </div>
    )
}

export default MacAir;