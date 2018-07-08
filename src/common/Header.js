import React from 'react';
import { View, Text, StatusBar} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                { props.headerText }
            </Text>
        </View>
    );
};

const styles = {
    container:{
        backgroundColor: '#f8f8f8',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        marginTop: StatusBar.currentHeight,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative'
    },
    text:{
        fontSize: 20
    }
};

export default Header;