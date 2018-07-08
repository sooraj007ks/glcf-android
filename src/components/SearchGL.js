import React, { Component } from 'react';
import { TextInput, Text, 
        TouchableOpacity, StyleSheet,
        Alert, View } from 'react-native';
import Card from '../common/Card';

export default class SearchGL extends Component {
    state = {
        searchText: ""
    }

    render(){
        const { container, text, input, headertext } = styles; 
        return(
            <View style={container}>
                <Text style={headertext}> 
                    Search GL Codes
                </Text>
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    style={input}
                    maxLength={15}
                    autoFocus
                    autoCorrect={false}
                    onChangeText={(searchText) => this.setState({searchText})}/>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=> Alert.alert('Search', this.state.searchText)}>
                    <Card>
                        <Text style={styles.text}>Search</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1c313a',
        paddingTop: 32
    },
    text:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center', 
        padding : 8
    }, 
    input:{
        height: 60,
        borderColor: '#718792',
        borderWidth: 1,
        margin: 12,
        padding : 10,
        color: '#fff',
        fontSize: 20,
        borderRadius: 13,
        marginTop: 20
    },
    headertext:{
        fontSize: 25,
        color: '#fff',
        textAlign: 'center', 
        padding : 8,
        borderBottomWidth: 1,
        borderColor: '#fff'
    }
});