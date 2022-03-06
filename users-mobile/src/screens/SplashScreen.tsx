import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native'
import useTimeout from '../hooks/useTimeout';
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';

interface Props extends StackScreenProps<RootStackAppNavigation, 'SplashScreen'> { }

const SplashScreen = ({ navigation }: Props) => {

  const nav = () => navigation.navigate('UsersScreen');
  useTimeout(1500, nav);

  return (
    <View style={styles.container} >
      <Text style={styles.titleStyle} >Usuarios</Text>
      <View style={styles.badgeRibbon}>
      <View style={styles.badgeRibbonCircle} />
      <View style={styles.badgeRibbonNeg140} />
      <View style={styles.badgeRibbon140} />
    </View>
    </View>

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

  badgeRibbon: {

  },

  badgeRibbonCircle: {
    width: 100,
    height: 100,
    backgroundColor: "#80BD9E",
    borderRadius: 50,
  },
  badgeRibbon140: {
    backgroundColor: "transparent",
    borderBottomWidth: 70,
    borderBottomColor: "#80BD9E",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    position: "absolute",
    top: 70,
    right: -10,
    transform: [{ rotate: "140deg" }],
  },
  badgeRibbonNeg140: {
    backgroundColor: "transparent",
    borderBottomWidth: 70,
    borderBottomColor: "#80BD9E",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    position: "absolute",
    top: 70,
    left: -10,
    transform: [{ rotate: "-140deg" }],
  },

})