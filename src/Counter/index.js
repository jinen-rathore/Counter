import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={{fontSize:40, color:"white", fontWeight:"bold"}}>Counter: {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={increment}
        >
          <Text style={{fontSize:20, fontWeight:"bold"}}>Press Here to increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={decrement}
        >
          <Text style={{fontSize:20, fontWeight:"bold"}}>Press Here to decrement</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor:"#1f2329",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30
    },
    button: {
        flexDirection:"row",
        justifyContent:"space-around",
        borderRadius:10,
        marginTop:40,
        alignItems: "center",
        backgroundColor: "#e1dde7",
        padding: 20
    },
    countContainer: {
        borderRadius:20,
        backgroundColor:"#6d37da",
        alignItems: "center",
        padding: 60
    }
  });
  
  export default Counter;