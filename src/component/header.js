import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// style
const viewStyle = {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elavation: 2,
    position: 'relative'
};

const textStyle = {
    fontSize: 20
};

// init component
const Header = () => {
    return (
        <SafeAreaView>
            <View style={viewStyle}>
                <Text style={textStyle}>My Header</Text>
            </View>
        </SafeAreaView>
    );
};

// export to render
export default Header;
