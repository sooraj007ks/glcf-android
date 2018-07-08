import React from 'react';
import { View, Text, TextInput} from 'react-native';

const Input = ({label, value, onChnageText, placeHolder, secureTextEntry}) => {
    const { inputStyle, labelStyle, container } = styles;
    return (
        <View style={container}>
            <Text style={labelStyle}>
                label
            </Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChnageText}
            />
        </View>
    );
};

const styles = {
    container:{
        alignItems: 'center',
        height: 40,
        flex: 1,
        flexDirection: 'row'
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    },
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
};

export default Input;