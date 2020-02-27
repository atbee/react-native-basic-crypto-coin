import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CoinDetail from './coinDetail';

class CoinList extends Component {
    state = { coins: [] };

    componentWillMount() {
        const url = 'https://benzneststudios.com/cryptostory/app/api/v1/get/sample';
        axios.get(url).then(response => {
            this.setState({ coins: response.data })
            console.log(response);
        });
    }

    rederCoin() {
        return this.state.coins.map(data => <CoinDetail coin={data} />);
    }

    render() {
        return (
            <View>
                {this.rederCoin()}
            </View>
        );
    }
}

// export to render
export default CoinList;