import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

export default function CustomText({placeholder, passwordVisible}){
    return(
        <>
            <TextInput
                placeholder={placeholder} 
                style = {styles.input}
                secureTextEntry = {passwordVisible}
            />
           
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '90%',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderRadius:10
    },
});