import React, {Component} from 'react';

// ui
import Header from './ui/Header'

// routes
import Home from './routes/Home'

import {Structure} from './structure'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            structure: new Structure()
        };
    }
    setStructure = newStructure =>{
        this.setState({
            structure: newStructure
        })
    }
    render(){
        return (
            <div className="App">
                <Header structure={this.state.structure} setStructure={this.setStructure}/>
                <Home structure={this.state.structure} setStructure={this.setStructure}/>
            </div>
        );
    }
}

export default App;
