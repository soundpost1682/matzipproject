import React from 'react';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, View, Text,SafeAreaView} from 'react-native';


function SignupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' />
        <InputField placeholder='Password' />
        <InputField placeholder='Confirm Password' />
      </View>
      <CustomButton label='Sign-up' variant='filled' size='large'/>
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

export default SignupScreen;
