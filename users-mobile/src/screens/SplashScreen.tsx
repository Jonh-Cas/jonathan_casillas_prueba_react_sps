/**
 * 
 * @param Props  este cprops contiene la navigacion de pantalla 
 * @returns este componete visualiza la el SplashScreen de la aplicacion
 */

import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, Animated } from 'react-native'
import useTimeout from '../hooks/useTimeout';
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';
import { useAnimation } from '../hooks/useAnimeted';

interface Props extends StackScreenProps<RootStackAppNavigation, 'SplashScreen'> { }



const SplashScreen = ({ navigation }: Props) => {

  const nav = () => navigation.replace('UsersScreen');
  const { opacity, fadeIn } = useAnimation();
  useTimeout(3000, nav);

  return (
    <Animated.View style={[
      styles.container, {
        opacity
      }]}
      onLayout={() => fadeIn(1500)}
    >

      <Text style={styles.titleStyle} >Usuarios</Text>

      <View style={styles.facebook}>
      <View style={styles.facebookMain}>
        <View style={styles.facebookCurve} />
        <View style={styles.facebookBefore} />
        <View style={styles.facebookAfter} />
        <View style={styles.facebookRedCover} />
      </View>
    </View>
    </Animated.View>

  )
}

export default SplashScreen;

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  titleStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000'
  },

  facebook: {
    width: 100,
    height: 110,
  },
  facebookMain: {
    backgroundColor: "#4897d8",
    width: 100,
    height: 110,
    borderRadius: 5,
    borderColor: "#4897d8",
    borderTopWidth: 15,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 0,
    overflow: "hidden",
  },
  facebookRedCover: {
    width: 10,
    height: 20,
    backgroundColor: "#4897d8",
    position: "absolute",
    right: 0,
    top: 5,
  },
  facebookCurve: {
    width: 50,
    borderWidth: 20,
    borderTopWidth: 20,
    borderTopColor: "white",
    borderBottomColor: "transparent",
    borderLeftColor: "white",
    borderRightColor: "transparent",
    borderRadius: 20,
    position: "absolute",
    right: -8,
    top: 5,
  },
  facebookBefore: {
    position: "absolute",
    backgroundColor: "white",
    width: 20,
    height: 70,
    bottom: 0,
    right: 22,
  },
  facebookAfter: {
    position: "absolute",
    width: 55,
    top: 50,
    height: 20,
    backgroundColor: "white",
    right: 5,
  },

})