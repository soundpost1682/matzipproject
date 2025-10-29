import React from 'react';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import { colors } from '@/constants/colors';


function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' error='Type your email.'/>
        <InputField placeholder='Password' />
      </View>
      <CustomButton label='Login' variant='filled' size='large'/>
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
    color:colors.BLUE_400
  }
});

export default LoginScreen;
