import { Dimensions, FlatList, Image, Pressable, Text, View } from "react-native"
import { AppColors } from "../../../utils/colors"
import React from "react"
import { categories } from "../../../data/categories"
import { products } from '../../../data/products';
import { BottomTabBar, BottomTabBarHeightContext } from "@react-navigation/bottom-tabs"


export const ProductItemComp = ({ productsFiltered }: { productsFiltered: any }) => {
    return (
        <FlatList
            style={{ paddingHorizontal: 10, height: '90%' }}
            numColumns={2}
            data={productsFiltered}
            showsVerticalScrollIndicator={false}

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