import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet,Text,View} from 'react-native';
import { AuthStackParamList } from '@/types/navigation';
import CustomButton from '@/components/CustomButton';
import { colors } from '@/constants/colors';


type Navigation = StackNavigationProp<AuthStackParamList>

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/MATZIP.png')} style={styles.image} resizeMode='contain'/>
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton label='Email Login' onPress={()=>navigation.navigate('Login')}/>
      <Pressable onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.emailText}>Sign-Up with Email</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  imageContainer:{
    flex:1.5,
    alignItems:'center',
  },
  buttonContainer:{
    flex:1,
    paddingHorizontal:30,
    gap:20,
    alignItems:'center'
  },
  image:{
    width:200,
    height:'100%',
  },
  emailText:{
    textDecorationLine:'underline',
    fontWeight:'500',
    padding:10,
    color:colors.BLACK
  }
});

export default AuthHomeScreen;
