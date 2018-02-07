import React from 'react'
import FishForm from './FishForm'


class Inventory extends React.Component {
    render(){
        return (
            <div>
                <p>Inventory</p>
                <FishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample FIshes</button>
            </div>
        )
    }
}

export default Inventory;
