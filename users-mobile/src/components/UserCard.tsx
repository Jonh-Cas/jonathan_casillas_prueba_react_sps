import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native'
import { UserInfo } from '../interfaces/userListInterfaces';
import Background from './Background';

interface Props {
    user: UserInfo;
    onPress: () => void;
}

const UserCard = ({ user, onPress }: Props) => {
    return (
        <>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <View style={styles.shadowStyle} >

                    <Image
                        source={{ uri: user.avatar }}
                        style={styles.imageStyle}
                    />
                </View>
                <Text style={styles.nameStyle} >{user.first_name + ' ' + user.last_name}</Text>
            </TouchableOpacity>
        </>
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
    },

    nameStyle: {
        textAlign: 'center',
        width: '60%',
        padding: 15,
        color: '#000',
        fontSize: 20,

    }
})