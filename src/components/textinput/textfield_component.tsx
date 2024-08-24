import React from "react"
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native"
import { AppColors } from "../../utils/colors"

const AppInputField = (
    { label, placeholder, keyboardType }
        :
        { label: string, placeholder: string, keyboardType: string }) => {
    const handlePress = () => {
        console.log('pressed')
    }

    return (
        <View
            style={{
                flexDirection: 'column',
                width: '100%',
                alignItems: 'flex-start',
            }
            }
        >
            <Text
                style={{
                    color: AppColors.secondary,
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'left',
                }}
            >{label}</Text>
            <TextInput
                keyboardType={keyboardType as KeyboardTypeOptions}
                multiline={true}

                numberOfLines={2}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    borderColor: AppColors.primary,
                    borderWidth: 2,
                    fontSize: 16,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    paddingVertical: 0,
                    marginTop: 5,
                }} />
        </View>
    )
}

export default AppInputField;