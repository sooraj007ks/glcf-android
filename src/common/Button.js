import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';

const Button = ( { children, onPress } ) => {
    const { button, text } = styles;
    return (
        <TouchableNativeFeedback onPress={onPress} style={button}>
            <Text style={text}>
                {children}
            </Text>
        </TouchableNativeFeedback>
    );
};

const styles = {
    button:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 5
    }, 
    text:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding : 10
    }
}

export default Button;