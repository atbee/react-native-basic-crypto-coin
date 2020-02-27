import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import propTypes from 'prop-types';
import Card from './card';

const CoinDetail = (props) => {
    return (
        <View>
            <Card>
                <View style={coinDetailStyle.containerMain}>
                    <Image style={coinDetailStyle.coinIconStyle}
                        source={{ uri: props.coin.coin_icon_url }} />
                    <View style={coinDetailStyle.containerCoinName}>
                        <Text style={coinDetailStyle.textCoinSymbol}>{props.coin.symbol}</Text>
                        <Text>{props.coin.name}</Text>
                    </View>
                    <Text style={coinDetailStyle.textCoinPrice}>${props.coin.price}</Text>
                </View>
            </Card>
        </View>
    );
};

CoinDetail.propTypes = {
    coin: propTypes.object
};

CoinDetail.defaultProps = {
    symbol: 'athibet'
}

const coinDetailStyle = {
    containerMain: {
        flexDirection: 'row'
    },
    containerCoinName: {
        flexDirection: 'column',
        marginLeft: 8,
        flex: 1,
    },
    coinIconStyle: {
        height: 50,
        width: 50
    },
    textCoinSymbol: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textCoinName: {
        fontSize: 14,
    },
    textCoinPrice: {
        fontSize: 20,
    }
};

// export to render
export default CoinDetail;