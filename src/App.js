import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import FlashScreen from './common/FlashScreen';
import Aux from './common/Wrapper';
import Home from './components/Home';
import CommonGL from './components/CommonGL';


export default class App extends Component {

    state = {
        view : 'splash-screen'
    }

    componentDidMount(){
        setTimeout(() => this.setState({
            view: 'home'
        }), 3000);
    };

    renderView = () => {
        // let { view } = this.state;
        // if (view === 'splash-screen'){
        //     return <FlashScreen title="SRJ Media"/>;
        // }
        // return <Home />
        return <CommonGL />
    }


    render(){
        console.log(`log ${this.state.view}`);
        return (
            <Aux>
                <StatusBar 
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                 />
                { this.renderView() }
                
            </Aux>
        );
    };
    
};


