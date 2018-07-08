import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,
        Alert, StatusBar} from 'react-native';
import Card from '../common/Card';

const menus = [
    {id: 0, menu: 'Search GL Codes'},
    {id: 1, menu: 'Tips'},
    {id: 2, menu: 'Common GL Codes'},
    {id: 3, menu: 'Notes'},
    {id: 4, menu: 'Exit'}

]


export default class Home extends Component {

    state = {
        view : 'splash-screen'
    }

    renderMenus(){
        return menus.map(({ id, menu }) => {
            return (
                <TouchableOpacity 
                    key={id}
                    activeOpacity={0.8}
                    onPress={()=> Alert.alert('Hello', menu)}>
                    <Card>
                        <Text style={styles.text}>{menu}</Text>
                    </Card>
                </TouchableOpacity>
            );
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor="#718792"
                    barStyle="dark-content"
                 />
                { this.renderMenus() }
            </View>
        );
    };
    
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1c313a',
        paddingTop: 32
    },
    text:{
        color: '#ffffff',
        fontSize: 22
    }
});
