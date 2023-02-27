import React, { Component } from 'react'
import './myStyles.css'

class Neuron extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            layerNum: props.layerNum,
            value: props.value
        }
    }

    render() {
        return (
            <div className='circle'>
                <div className='neuron-text'>{this.state.value}</div>
            </div>
        )
    }
}
export default Neuron;