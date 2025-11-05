import React from 'react';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import { colors } from '@/constants/colors';


function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' />
        <InputField placeholder='Password' secureTextEntry/>
      </View>
      <CustomButton label='Log-In' variant='filled' size='large'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:30,
  },
  inputContainer:{
    gap:20,
    marginBottom:30,
    
  }
});

export default LoginScreen;
