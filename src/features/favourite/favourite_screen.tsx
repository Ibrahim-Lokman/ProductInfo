import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const FavouriteScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,

        }).start();
    }, [fadeAnim]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Animated.Text

                style={{
                    opacity: fadeAnim,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}
            >
                Favorite Screen
            </Animated.Text>
        </View>
    );
};

export default FavouriteScreen;