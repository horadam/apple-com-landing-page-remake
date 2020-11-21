import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class VizAwareImg extends Component {
  state = {
    imgViz: false
  }
  render() {
    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible});
          console.log('chganing')
        }}
      >
        <img
          src={this.props.src}
          style={{
            width: 300,
            height: 300,
            opacity: this.state.imgViz ? 1 : 0.25,
            transition: 'opacity 500ms linear',
            'background-color': 'purple'
          }}
          alt=""
        />
      </VizSensor>
    );
  }
}

export default VizAwareImg