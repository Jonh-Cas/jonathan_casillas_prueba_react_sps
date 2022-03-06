import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../components/Background';

interface Props extends StackScreenProps<RootStackAppNavigation, 'UserCardScreen'> { }

const UserCardScreen = ({ route, navigation }: Props) => {

    const { first_name, last_name, email, avatar } = route.params


    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Background
                color='#4897d8'
            />

            <View style={styles.container} >
                <View style={{ ...styles.buttonBack, ...styles.shadowStyle }} >
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

                <View style={styles.shadowStyle} >
                    <Image
                        source={{ uri: avatar }}
                        style={styles.imageStyle}
                    />
                </View>


                <Text style={styles.textName} >{first_name + ' ' + last_name}</Text>
                <Text style={styles.textEmail} >{email}</Text>
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