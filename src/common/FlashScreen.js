import React from 'react';
import { View, Text } from 'react-native';


const renderCopyright = () => {
    curYear = new Date().getFullYear();
    return (curYear <= 2018) ? 2018 : `2018-${curYear}`
};

const FlashScreen = props => {
    const { container, mainText, secText} = styles;

    return (
        <View style={container}>
            <View>
                <Text style={mainText}> {props.title}</Text>
            </View>
            <View>
                <Text style={secText}>
                    All rights reserved &copy;  {renderCopyright()}
                </Text>
            </View>
        </View>
    );
}

const styles = {
    container:{
        flex:1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText:{
        fontSize: 32,
        fontWeight: '600',
        color: 'white'
    },
    secText:{
        fontSize: 16,
        color: 'white',
    }
}

export default FlashScreen;