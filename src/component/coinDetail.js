import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import propTypes from 'prop-types';
import Card from './card';

const CoinDetail = (props) => {
    return (
        <View>
            <Card>
                <View>
                    <Image style={coinDetailStyle.coinIconStyle}
                        source={{ uri: props.coin.coin_icon_url }} />
                    <Text>{props.coin.symbol + ":" + props.coin.name}</Text>
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
    coinIconStyle: {
        height: 50,
        width: 50
    }
};

// export to render
export default CoinDetail;