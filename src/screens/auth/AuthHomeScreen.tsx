import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { AuthStackParamList } from '@/types/navigation';
import CustomButton from '@/components/CustomButton';

type Navigation = StackNavigationProp<AuthStackParamList>

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <CustomButton label='Email Login' onPress={()=>navigation.navigate('Login')}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default AuthHomeScreen;
