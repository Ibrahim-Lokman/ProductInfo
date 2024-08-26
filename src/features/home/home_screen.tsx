import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { CategoryItemComp } from './components/category_item_comp';
import { ProductItemComp } from './components/product_item_comp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../data/products';

const HomeScreen = () => {

    return (
        <SafeAreaView >
            <CategoryItemComp />
        </SafeAreaView>
    );
};


export default HomeScreen;