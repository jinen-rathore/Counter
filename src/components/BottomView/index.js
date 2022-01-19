import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function BottomView(){
    return (
        <View style={styles.container}>
          <Text style = {{color: '#000'}}>HELLO</Text>
          <Image
            source =  {{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style = {{width: 200, height: 200}}
          />
          <TextInput placeholder='Input text here...' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });