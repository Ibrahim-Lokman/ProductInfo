import { FlatList, Image, Pressable, Text, View } from "react-native"
import { AppColors } from "../../../utils/colors"
import React, { useState } from "react"
import { categories } from "../../../data/categories"
import { products } from "../../../data/products"
import { ProductItemComp } from "./product_item_comp"


export const CategoryItemComp = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filterdProducts, setFilterdProducts] = useState(products);
    return (

        <View>
            <FlatList
                style={{ height: '10%' }}
                horizontal
                data={categories}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>

                    <Pressable
                        onPress={() => {
                            setSelectedCategory(item.title)
                            setFilterdProducts(item.id != null ? products.filter((product) => product.category === item.id) : products)
                        }}
                        style={{
                            backgroundColor: 'white',
                            borderColor: selectedCategory == item.title ? AppColors.primary : 'white',
                            borderWidth: 1,
                            borderRadius: 10,


                            padding: 10,
                            margin: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}

                            style={{
                                width: 60,
                                height: "100%",
                                objectFit: 'contain',
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
            <ProductItemComp
                productsFiltered={filterdProducts}
            />

        </View>



    )
}