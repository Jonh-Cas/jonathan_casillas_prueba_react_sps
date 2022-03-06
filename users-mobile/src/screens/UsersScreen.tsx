import React from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackAppNavigation } from '../navigation/StackAppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGetUsersList from '../hooks/useGetUsersList';
import useTimeout from '../hooks/useTimeout';
import UserCard from '../components/UserCard';
import Background from '../components/Background';

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
                color='#80BD9E'
            />
            <FlatList
                data={users}
                keyExtractor={(item,) => item.id.toString()}
                renderItem={({ item }) => {
                    console.log(item.avatar);

                    return (
                        <UserCard
                            user={item}
                            onPress={() => navigation.navigate('UserCardScreen', item)}
                        />
                    )
                }}
                style={{
                    flex: 1,
                    padding: 10,
                }}
                ListHeaderComponent={({ }) => (
                    <SafeAreaView >

                    </SafeAreaView>
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 20 }} >
                        <View
                            style={{ borderWidth: 1, borderColor: '#777777' }}
                        />
                    </View>

                )}

            />
        </>
    )
}

export default UsersScreen;

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        color: '#000',
    },

    activityStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})