import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../types/navigation';

type Navigation = StackNavigationProp<AuthStackParamList>

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Go Log-In
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
