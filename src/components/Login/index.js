import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//custom text prop
import CustomText from '../CustomText';

export default function Login(){
    return(
        <View style = {styles.container}>
            <CustomText  
                placeholder='Enter Email Here'                 
            />
            <CustomText   
                placeholder='Enter Password Here'
                passwordVisible={true}
            />

            <TouchableOpacity
                style = {styles.button}
            >
                <Text style={{fontSize: 20}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center'
      },
    button: {
        backgroundColor: 'skyblue',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        padding: '2%',
    }
});