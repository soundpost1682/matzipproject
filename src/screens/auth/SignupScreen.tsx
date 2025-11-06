import React, { useState } from 'react';
import {StyleSheet, View, Text,SafeAreaView} from 'react-native';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import { validateSignup } from '@/utils/validation';


function SignupScreen() {
  const signup = useForm({
    initialValue : {email:'', password:'', passwordConfirm:''},
    validate: validateSignup,

  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' touched={signup.touched.email} error={signup.errors.email} {...signup.getTextInputProps('email')} />
        <InputField secureTextEntry textContentType='oneTimeCode' placeholder='Password' touched={signup.touched.password} error={signup.errors.password} {...signup.getTextInputProps('password')} />
        <InputField secureTextEntry placeholder='Confirm Password' touched={signup.touched.passwordConfirm} error={signup.errors.passwordConfirm} {...signup.getTextInputProps('passwordConfirm')}/>
      </View>
      <CustomButton label='Sign-Up' variant='filled' size='large'/>
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
