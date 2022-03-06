/**
 * Requiere ula infomacion de un usuario y una funcion para navegar a la otra pantalla 
 * @param Props Se requiere mandarle un usuario para visualizar la informacion del mismo.
 * se le manda una funcion para navigar a la otra pantalla  
 * @returns este componente visualiza el boton de un usuario con su nombre, apellido y imagen todo esto animado 
 */


import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, View, ActivityIndicator, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimeted';
import { UserInfo } from '../interfaces/userListInterfaces';
import { useEffect } from 'react';


interface Props {
    user: UserInfo;
    onPress: () => void;
}


const UserCard = ({ user, onPress }: Props) => {

    const { position, startMoving } = useAnimation();

    useEffect(() => {
        startMoving(800, 800) 
    }, [])
    

    return (
        <Animated.View
            style={{
                transform: [{
                    translateY: position
                }]
            }}
        >

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <View style={styles.shadowStyle} >
                    {
                        (user.avatar) ?
                            <View style={styles.shadowStyle} >

                                <Image
                                    source={{ uri: user.avatar }}
                                    style={styles.imageStyle}
                                />
                            </View>
                            :
                            <ActivityIndicator
                                size={20}
                                color='#80BD9E'
                            />
                    }
                </View>
                <Text style={styles.nameStyle} >{user.first_name + ' ' + user.last_name}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default UserCard;

const styles = StyleSheet.create({

    buttonStyle: {
        flexDirection: 'row',
        height: 130,
        padding: 10,


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
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: 'center',
        backgroundColor: '#fff'
    },

    nameStyle: {
        textAlign: 'center',
        width: '60%',
        padding: 15,
        color: '#000',
        fontSize: 20,

    }
})