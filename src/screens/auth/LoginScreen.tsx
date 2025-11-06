import React, { useRef } from 'react';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, View, SafeAreaView, TextInput} from 'react-native';
import { colors } from '@/constants/colors';
import useForm from '@/hooks/useForm';
import { validateLogin } from '@/utils/validation';


function LoginScreen() {
  const passwordRef = useRef<TextInput|null>(null)

  const login = useForm({
    initialValue : {email:'', password:'' },
    validate : validateLogin
  })

  const handleSubmit = ()=>{
    console.log('login', login.values)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' autoFocus submitBehavior='submit' returnKeyType='next' inputMode='email' onSubmitEditing={()=>{passwordRef.current?.focus()}} touched={login.touched.email} error={login.errors.email} {...login.getTextInputProps('email')}/>
        <InputField secureTextEntry ref={passwordRef} returnKeyType='join' textContentType='oneTimeCode' placeholder='Password' touched={login.touched.password} error={login.errors.password} maxLength={20} onSubmitEditing={handleSubmit} {...login.getTextInputProps('password')}/>
      </View>
      <CustomButton label='Log-In' variant='filled' size='large' onPress={handleSubmit}/>
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
