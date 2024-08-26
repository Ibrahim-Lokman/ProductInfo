import { FlatList, Image, Pressable, Text } from "react-native"
import { AppColors } from "../../../utils/colors"
import React from "react"
import { categories } from "../../../data/categories"


export const CategoryItemComp = () => {
    return (
        <FlatList
            // style={{ padding: 10 }}
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}

            renderItem={({ item }) =>

                <Pressable
                    onPress={() => console.log('pressed')}
                    style={{
                        backgroundColor: 'white',
                        borderColor: AppColors.primary,
                        borderWidth: 0.5,
                        borderRadius: 10,
                        elevation: 3,
                        padding: 10,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            width: 45,
                            aspectRatio: 1,

                        }}
                    />
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: AppColors.primary,
                            textAlign: 'center'
                        }}
                    >{item.title}</Text>
                </Pressable>
            }
        />


    )
}