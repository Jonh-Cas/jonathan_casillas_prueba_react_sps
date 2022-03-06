/**
 * Este componente requiere que se le mande el color
 * @param Props Este Objeto contiene la variable color de tipo string
 * @returns Visualiza el fondo de panatalla 
 */

import React from 'react'
import { StyleProp, View, ViewProps } from 'react-native'

interface Props {
    color: string;
    // style?: StyleProp<ViewProps>
}


const Background = ({ color }: Props) => {
    return (
        <View 
            style={{ 
                position: 'absolute',
                backgroundColor: color,
                top: -350,
                left: 50,
                width: 900,
                height: 1200,
                transform: [
                    { 
                        rotate: '-25deg',
                    }
                ]
             }}
        />
    )
}

export default Background;
