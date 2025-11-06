import React from 'react';
import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import { colors } from '@/constants/colors';
import useForm from '@/hooks/useForm';
import { validateLogin } from '@/utils/validation';


function LoginScreen() {
  const login = useForm({
    initialValue : {email:'', password:'' },
    validate : validateLogin

  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' touched={login.touched.email} error={login.errors.email} {...login.getTextInputProps('email')}/>
        <InputField secureTextEntry textContentType='oneTimeCode' placeholder='Password' touched={login.touched.password} error={login.errors.password} maxLength={20} {...login.getTextInputProps('password')}/>
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
