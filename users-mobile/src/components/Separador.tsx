import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAnimation } from '../hooks/useAnimeted';
import { useEffect } from 'react';

const Separador = () => {

    const { position, startMoving } = useAnimation();
    useEffect(() => {
        startMoving(800, 800)
    }, [])


    return (
        <Animated.View style={{
            height: 20,
            transform: [{
                translateY: position,
            }]
        }}
        >
            <View
                style={styles.line}
            />
        </Animated.View>
    )
}

export default Separador;

const styles = StyleSheet.create({

    line: {
        borderWidth: 1,
        borderColor: '#777777',
    },


})