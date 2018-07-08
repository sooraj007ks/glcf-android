import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Lister = ({ data, curItem, setNo }) => {
  let responce = null;
  if( curItem === setNo ){
    responce = data[Object.keys(data)]
        .sort((a,b) => a[0][0] <  b[0][0])
        .map((row, idx) => (
        <View key={idx} style={styles.contentWrapper}>
          <Text style={styles.text}>{row[0]}</Text>
          <Text style={styles.boldText}>{row[1]}</Text>
        </View>
          )
        );
  }
  return (
    <View>
      { responce }

    </View>
  )
}

const styles = StyleSheet.create({
    contentWrapper:{
        borderWidth: 1,
        borderColor: '#fff',
        borderTopWidth: 0,
        borderRadius:2,
        marginHorizontal: 3,
        paddingVertical: 10,
        paddingHorizontal: 2
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 8
    },
    boldText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '200',
        textAlign: 'center',
        padding: 8
    }
});

export default Lister;
