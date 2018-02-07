import React from 'react'
import FishForm from './FishForm'


class Inventory extends React.Component {
    

    render(){

        let fishes = this.props.fishes
    
        console.log(fishes);
        
        console.log(Object.keys(this.props.fishes));
        
        return (
            <div>
                <p>Inventory</p>
                {Object.keys(fishes).map(fish => 
                     <div key={fish} className="fish-edit">

                                    <input type="text" name="name" value={fishes[fish].name} onChange={(e) => this.props.editFish(e, fish)}/>
                    
                                    <input type="text" name="price" value={fishes[fish].price} onChange={(e) => this.props.editFish(e, fish)}/>
                                    
                                    <select name="status" value={fishes[fish].status} onChange={(e) => this.props.editFish(e, fish)}>
                                        <option value="available">Fresh!</option>
                                        <option value="unavailable">Sold Out!</option>
                                    </select>
                    
                                    <textarea name="desc" rows="8" cols="40" value={fishes[fish].desc} onChange={(e) => this.props.editFish(e, fish)}></textarea>
                                    <button onClick={() => this.props.removeFish(fish)}>REMOVE</button>
                    
                        </div>
                )}


                <FishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample FIshes</button>
            </div>
        )
    }
}

export default Inventory;
