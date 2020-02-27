import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import propTypes from 'prop-types';

// style
const headerStyle = {
    viewStyle: {
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
    },
    textStyle: {
        fontSize: 20
    }
};

// init component
const Header = (props) => {
    const { viewStyle, textStyle } = headerStyle;
    return (
        <SafeAreaView>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </SafeAreaView>
    );
};

Header.propTypes = {
    headerText: propTypes.string
}

// export to render
export default Header;
