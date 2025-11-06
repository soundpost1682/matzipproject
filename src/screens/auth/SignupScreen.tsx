import React, { useRef, useState } from 'react';
import {StyleSheet, View, Text,SafeAreaView, TextInput} from 'react-native';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import { validateSignup } from '@/utils/validation';


function SignupScreen() {
  const passwordRef = useRef<TextInput|null>(null)
  const passwordConfirmRef = useRef<TextInput|null>(null)
  const signup = useForm({
    initialValue : {email:'', password:'', passwordConfirm:''},
    validate: validateSignup,

  })
  const handleSubmit = ()=>{
    console.log('signup.values', signup.values)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' autoFocus submitBehavior='submit' returnKeyType='next' inputMode='email' onSubmitEditing={()=>{passwordRef.current?.focus()}} touched={signup.touched.email} error={signup.errors.email} {...signup.getTextInputProps('email')} />
        <InputField secureTextEntry textContentType='oneTimeCode' ref={passwordRef} submitBehavior='submit' returnKeyType='join' placeholder='Password' onSubmitEditing={()=>{passwordConfirmRef.current?.focus()}} touched={signup.touched.password} error={signup.errors.password} {...signup.getTextInputProps('password')} />
        <InputField secureTextEntry placeholder='Confirm Password' returnKeyType='join' touched={signup.touched.passwordConfirm} ref={passwordConfirmRef} error={signup.errors.passwordConfirm} onSubmitEditing={handleSubmit} {...signup.getTextInputProps('passwordConfirm')}/>
      </View>
      <CustomButton label='Sign-Up' variant='filled' size='large' onPress={handleSubmit} />
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
