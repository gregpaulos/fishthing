import React, { Component } from 'react';
import './css/style.css';

import StorePicker from './components/StorePicker'
import Header from './components/Header'
import Inventory from './components/Inventory'
import Order from './components/Order'
import SampleFishes from './sample-fishes'
import FishCard from './components/FishCard'


class App extends Component {
  constructor () {
    super();
    
    this.state = {
      fishes: {},
      order: {}
    };

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  // addFish(fish) {
  //   let fishes = {...this.state.fishes};
  //   const timestamp = Date.now();
  //   fishes[`fish-${timestamp}`] = fish
  //   this.setState({fishes:fishes})
  // }

  loadSamples = () => {
    let fishes = {...this.state.fishes, ...SampleFishes}
    this.setState({fishes:fishes})
    
  }

  addFish = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form);
    let fishes = {...this.state.fishes};
    let fish = {
      name: data.get('fishName'),
      price: data.get('price'),
      status: data.get('inStock'),
      desc: data.get('description'),
      image: data.get('image')
    }
    console.log(fish);
    
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish
    this.setState({fishes:fishes})

    console.log(this.state);
    
    form.reset()
  }
    
  addToOrder = (key) => {
    console.log('hello ORDER');
    console.log(key);
    
    let order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order:order})

  }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
            <Header tagline="Eat Shit" fishes={this.state.fishes}/>
            <ul className="list-of-fishes">
              {Object.keys(this.state.fishes).map(fish => 
                <FishCard key={fish} keyName={fish} fish={this.state.fishes[fish]} addToOrder={this.addToOrder}/>
              )}
            </ul>
            
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
