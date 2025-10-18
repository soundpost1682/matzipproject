import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function AuthHomeScreen() {
  const navigation = useNavigation();

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
