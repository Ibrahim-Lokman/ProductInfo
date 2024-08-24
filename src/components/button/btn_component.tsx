import React from "react"
import { Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './btn_style';

const AppButton = (props: any) => {
    const handlePress = () => {
        console.log('pressed')
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.container, ...props.customstyle ?? []]}
        >
            <Text style={[styles.title, ...props.customstyle ?? []]} >{props.title}</Text>
        </TouchableOpacity>
    )
}


export default AppButton;