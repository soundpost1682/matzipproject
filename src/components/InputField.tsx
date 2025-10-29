import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import { colors } from '@/constants/colors';

interface InputFieldProps extends TextInputProps{
    error ?:string;

}

function InputField({error, ...props}: InputFieldProps) {
  return (
    <View>
        <TextInput style={[styles.input, Boolean(error) && styles.inputError]} {...[props]}/>
        {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    input :{
        borderWidth:1,
        borderColor:colors.GRAY_200,
        justifyContent:'center',
        height:50,
        paddingHorizontal:10,
        fontSize:16,
        color:colors.BLACK
    },
    error :{
        color:colors.RED_500,
        fontSize:12,
        paddingTop:5,
    },
    inputError:{
        borderWidth:1,
        borderColor:colors.RED_300
    }
});

export default InputField;