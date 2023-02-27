import React, { Component } from 'react'
import Layer from './layer'

class Model extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layers: [1, 2],
      layerDetails: {
        1: [0, 1, 2, 3],
        2: [0]
      }
    }
  }

  render() {
    return (
     <div className='model'>
        {this.state.layers.map(x => {
          const layerDetail = this.state.layerDetails[x];
          <Layer layerNum={x} neurons={layerDetail} />
        })}
     </div>
   )
  }
}

export default Model