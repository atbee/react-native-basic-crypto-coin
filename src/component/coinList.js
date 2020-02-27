import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';
 
class CoinList extends Component{
 
    state = {coins: []};
 
    componentWillMount(){
        const url = 'https://benzneststudios.com/cryptostory/app/api/v1/get/sample';
        axios.get(url)
        .then(response => this.setState({coins:response.data}));
    }

    rederCoin(){
        return this.state.coins.map(data => <Text>{data.symbol}</Text>)
    }
 
    render(){
        console.log(response);
        return(
            <View>
                {this.rederCoin()}
            </View>
        );
    }
}