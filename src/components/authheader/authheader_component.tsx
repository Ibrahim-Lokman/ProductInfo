import React from "react"
import { Pressable, Text, View } from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppColors } from "../../utils/colors";

const AppBar = ({ title, onBackPressed }: { title: string, onBackPressed: () => void }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                paddingHorizontal: 10,
                height: 50,
                alignItems: 'center',
                backgroundColor: AppColors.primary,
            }
            }
        >
            <Pressable
                hitSlop={10}
                style={{
                    flex: 1,
                    padding: 2,
                    backgroundColor: AppColors.contentOnPrimary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5

                }}
                onPress={
                    () => {
                        console.log('back pressed');
                    }
                } >
                <Text
                    style={{
                        color: AppColors.primary,
                        fontSize: 14,
                        fontWeight: 'bold'
                    }}
                >
                    Back
                </Text>
            </Pressable>
            <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                style={{
                    flex: 5,
                    color: AppColors.contentOnPrimary,
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingLeft: 8

                }}
            >{title}
            </Text>
            <View style={{ flex: 1 }} />
        </View>
    )
}

export default AppBar;