import { Dimensions, FlatList, Image, Pressable, Text, View } from "react-native"
import { AppColors } from "../../../utils/colors"
import React from "react"
import { categories } from "../../../data/categories"
import { products } from "../../../data/products"
import { BottomTabBar, BottomTabBarHeightContext } from "@react-navigation/bottom-tabs"


export const ProductItemComp = () => {
    return (
        <FlatList
            style={{ padding: 10 }}
            numColumns={2}
            data={products}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: 100 }} />}
            renderItem={({ item }) =>

                <Pressable
                    onPress={() => console.log('pressed')}
                    style={{ padding: 5 }}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            width: (Dimensions.get('window').width / 2) - 20,

                            aspectRatio: 1,
                            borderRadius: 10,
                            //padding: 5,
                        }}
                    />
                    <Text
                        style={{
                            paddingVertical: 5,
                            fontSize: 14,
                            fontWeight: 'semibold',
                            color: AppColors.primary,
                            // textAlign: 'center'
                        }}
                    >{item.title}</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: AppColors.secondary,
                            //   textAlign: 'center'
                        }}
                    >{item.price}</Text>
                </Pressable>
            }
        />


    )
}