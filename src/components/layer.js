import React, { Component } from 'react'
import Neuron from './neuron'

class Layer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            layerNum: props.layerNum,
            neurons: props.neurons
        }
    }

    render() {
        return (
            <div className='layer'>
                {
                this.state.neurons.map((object, i) => 
                <Neuron layerNum={this.state.layerNum} value = {this.state.neurons[i]}/>)
                }
            </div>
        )
    }
}

export default Layer