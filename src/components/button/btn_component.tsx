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
            <Text style={styles.title} >{props.title}</Text>
        </TouchableOpacity>
    )
}

// const PressableButton = (props: any) => {
//     return (
//         <Pressable
//             style={[styles.container, ...props.customstyle ?? []]}
//             onPress={() => console.log('pressed')}>
//             <Text style={styles.title} >{props.title}</Text>
//         </Pressable>
//     )
// }

export default AppButton;