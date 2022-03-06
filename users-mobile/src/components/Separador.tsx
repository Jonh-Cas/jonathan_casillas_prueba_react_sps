import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separador = () => {
    return (
        <View style={{ height: 20 }} >
            <View
                style={styles.line}
            />
        </View>
    )
}

export default Separador;

const styles = StyleSheet.create({

    line: {
         borderWidth: 1, 
         borderColor: '#777777',
    },
    

})