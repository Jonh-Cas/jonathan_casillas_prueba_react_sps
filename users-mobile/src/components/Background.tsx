import React from 'react'
import { StyleProp, View, ViewProps } from 'react-native'

interface Props {
    color: string;
    style?: StyleProp<ViewProps>
}

const Background = ({ color }: Props) => {
    return (
        <View 
            style={{ 
                position: 'absolute',
                backgroundColor: color,
                top: -350,
                left: 30,
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

// '#5856d6'