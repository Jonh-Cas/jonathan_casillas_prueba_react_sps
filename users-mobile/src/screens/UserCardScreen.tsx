/**
 * Es componete requiere que se le mande la informacion de un usuario
 * @param Prosp este Objetos tiene los valores de la navegacion y la informacion de un usuario 
 * nombre, apellido, email y avatar o imagen del usuario 
 * @returns Este pantalla descpliega la informacion del usuario al transcurrir 800 milisegundos
 *  y un boton para regresar a la panatalla anterior
 */

import React from 'react'
import { Animated,  SafeAreaView, StyleSheet,  TouchableOpacity, View } from 'react-native'
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../components/Background';
import { useAnimation } from '../hooks/useAnimeted';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackAppNavigation, 'UserCardScreen'> {}

const UserCardScreen = ({ route, navigation }: Props) => {

    const { first_name, last_name, email, avatar } = route.params;
    const {opacity, fadeIn } = useAnimation();

    useEffect(() => {
      fadeIn(800);
    }, [])
    

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Background
                color='#4897d8'
            />

            <View style={styles.container} >
                <View style={{ ...styles.buttonBack, ...styles.shadowStyle  }} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.7}
                    >
                        <Icon
                            name='arrow-back'
                            color='#80BD9E'
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
                    <Animated.Image
                        source={{ uri: avatar }}
                        style={{...styles.imageStyle, opacity}}
                    />
               
                <Animated.Text style={{...styles.textName, opacity}}  >{first_name + ' ' + last_name}</Animated.Text>
                <Animated.Text style={{...styles.textEmail, opacity}} >{email}</Animated.Text>
            </View>


        </SafeAreaView>
    )
}

export default UserCardScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
    },
    buttonBack: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 20,
        top: 60,
        borderRadius: 100,

    },

    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    imageStyle: {
        height: 180,
        width: 180,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 100,
    },

    textName: {
        fontSize: 20,
        color: '#000',
        marginTop: 10
    },

    textEmail: {
        fontSize: 25,
        color: '#000',

    }
})