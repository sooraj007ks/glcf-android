import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
            { props.children }
        </View>
    );
};

const styles = {
    container:{
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#fff',
        margin: 12,
        padding : 10
    }
};

export default Card;