import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./splash_styles";
import AppButton from "../../../components/button/btn_component";
import PressableButton from "../../../components/button/btn_component";


const Splash = () => {
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source={require('../../../assets/splash_logo.png')}
            />
            <Text
                style={styles.title}
            >
                You will find all the product info here!
            </Text>

            <View style={{
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
            }} >
                <AppButton
                    title="Sign In"
                />
                <View style={{ height: 10 }} />
                <AppButton
                    customstyle={[
                        { backgroundColor: 'grey' },
                    ]}
                    title="Sign up"
                />
            </View>

        </View >
    )

}

export default Splash;