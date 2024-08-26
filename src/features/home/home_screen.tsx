import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { CategoryItemComp } from './components/category_item_comp';
import { ProductItemComp } from './components/product_item_comp';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (

        <SafeAreaView >
            <CategoryItemComp />
            <ProductItemComp />
        </SafeAreaView>
    );
};


export default HomeScreen;