import React from 'react'

const SmallChip = () => {
    return (
        <div className="smallChip">
            <div className="m1Img"></div>
            <h2 className="headline">
                Small chip. Giant leap.
            </h2>
            <div className="smallChipInnerWrapper">
                <h3 className="subhead"> 
                    Packed with an astonishing 16 billion transistors, the new M1&nbsp;chip integrates the CPU, GPU, Neural&nbsp;Engine, I/O, and so much more onto a single tiny chip. Combined with the new macOS&nbsp;Big&nbsp;Sur, M1 delivers category-smashing speed, mind-bending graphics, and power efficiency and battery life that defy&nbsp;belief.
                </h3>
                <a href="https://apple.com" className="button">
                    Learn more
                </a>
            </div>
        </div>
    )
}

export default SmallChip;