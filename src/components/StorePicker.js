import React, { Component } from 'react';

import { getFunName } from '../helpers'

class StorePicker extends Component {
  constructor() {
      super();
      this.goToStore = this.goToStore.bind(this);
  }

    goToStore(event) {
      console.log('Up Yours');
      event.preventDefault();
      console.log(this.storeInput.value);
      const storeID = this.storeInput.value;
      this.context.router.transitionTo(`/store/${storeID}`)
  }
    
  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}> 
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
            <button type="submit">Visit Store-> </button>

        </form>
    );
  }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;