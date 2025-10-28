import React from 'react';
import {SafeAreaView, StyleSheet, Text, } from 'react-native';
import { FeedStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type Navigation = StackNavigationProp<FeedStackParamList>

function FeedListScreen() {
  const navigation = useNavigation<Navigation>()
  return (
    <SafeAreaView>
        <Text>FeedListScreen</Text>
        <Text onPress={()=>navigation.navigate('FeedDetail', {id:1})}>num 1</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default FeedListScreen;