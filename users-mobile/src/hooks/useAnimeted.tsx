/**
 * Este CustomHook anima imagens y texto en la aplicacion de su posicion y opacidada
 * @returns un Objeto con variables y funciones que activan la opacidad y cambio de posicion
 */

import { useRef } from 'react';
import { Animated } from 'react-native';


export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(-100)).current;

    const fadeIn = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }
        ).start();


    }

    const fadeOut = (duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }
        ).start();
    }

    const startMoving = (initPosition: number, duration: number = 300) => {

        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce,
            }
        ).start();
    }


    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMoving
    }
}