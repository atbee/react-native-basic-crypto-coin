import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import Header from './src/component/header';
import CoinList from './src/component/coinList';

const App = () => (
    <View>
        <Header headerText='OH MY COIN' />
        <CoinList />
    </View>
);

AppRegistry.registerComponent(appName, () => App);