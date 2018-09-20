import React, {Component} from 'react';

import '../css/App.css';
import Header from '../components/Header.js';
import ChartContainer from './ChartContainer'

class App extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className={"App"}>
                <Header/>
                <ChartContainer/>
            </div>
        )
    }
}
export default App;
