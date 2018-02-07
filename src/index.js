import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Match, Miss } from 'react-router'

import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}/>             
                <Match exactly pattern="/store/:storeID" component={App}/>       
                <Miss component={NotFound} />      
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
