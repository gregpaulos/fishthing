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
    this.editFish = this.editFish.bind(this);
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
    // console.log(fish);
    
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish
    this.setState({fishes:fishes})

    // console.log(this.state);
    
    form.reset()
  }
  
  editFish = (event, fish) => {
    // console.log('got here to editFIsh');
    let fishes = {...this.state.fishes};
    fishes[fish][event.target.name] = event.target.value
    this.setState({fishes:fishes})
    
  }

  // NOTE: when declare method this way (with fat arrow)
  // do NOT need to bind it up in the constructor
  removeFish = (fish) => {
    let fishes = {...this.state.fishes};
    delete fishes[fish]
    this.setState({fishes:fishes})
  }

  addToOrder = (key) => {
    // console.log('hello ORDER');
    // console.log(key);
    
    let order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order:order})

  }

  removeFromOrder = (fish) => {
    let order = {...this.state.order};
    delete order[fish]
    this.setState({order:order})
  }

  // checks local storage to see if order save there when page loads
  componentWillMount () {
    var savedFishes = localStorage.getItem('fishes') 
    var localOrder = localStorage.getItem('order')
    if (localStorage && savedFishes) {
      let order = JSON.parse(localOrder)
      let fishes = JSON.parse(savedFishes)
      // console.log(order);
      
      this.setState({order:order, fishes: fishes})
    }
  }

  // saves the order to local storage
  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem('order', JSON.stringify(nextState.order))
    localStorage.setItem('fishes', JSON.stringify(nextState.fishes))
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
        <Order order={this.state.order} fishes={this.state.fishes} removeFromOrder={this.removeFromOrder}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} editFish={this.editFish} removeFish={this.removeFish}/>
      </div>
    );
  }
}

export default App;
