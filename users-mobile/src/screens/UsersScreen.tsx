import React from 'react'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGetUsersList from '../hooks/useGetUsersList';
import useTimeout from '../hooks/useTimeout';
import UserCard from '../components/UserCard';
import Background from '../components/Background';
import Separador from '../components/Separador';

interface Props extends StackScreenProps<RootStackAppNavigation, 'UsersScreen'> { }

const UsersScreen = ({ navigation }: Props) => {

    const { users } = useGetUsersList();
    const { isFinish } = useTimeout(1000)



    if (users.length === 0 || !isFinish) {
        return (
            <ActivityIndicator
                color='#80BD9E'
                size={50}
                style={styles.activityStyle}
            />
        )
    }

    return (
        <>
            <Background
                color='#4897d8'
            />

            <FlatList
                data={users}
                keyExtractor={(item,) => item.id.toString()}
                renderItem={({ item }) => (
                        <UserCard
                            user={item}
                            onPress={() => navigation.navigate('UserCardScreen', item)}
                        />
                    )}
                style={{flex: 1 }}
                ListHeaderComponent={() => (
                    <SafeAreaView />
                )}
                ItemSeparatorComponent={() => (
                    <Separador />
                )}

            />
        </>
    )
}

export default UsersScreen;

const styles = StyleSheet.create({

    activityStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})