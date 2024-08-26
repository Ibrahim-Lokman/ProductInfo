import React from "react";
import { Text, View } from "react-native";
import App from "../../../../App";
import AppBar from "../../../components/authheader/authheader_component";
import AppInputField from "../../../components/textinput/textfield_component";
import { NavigationAction } from "@react-navigation/native";
import AppButton from "../../../components/button/btn_component";




const SignIn = ({ navigation }: { navigation: any }) => {
    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View>
            <AppBar title="Sign Up" onBackPressed={onBack} />

            <View style={{

                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '93%'
            }}>

                <View
                    style={{
                        padding: 10,
                    }}
                >
                    <AppInputField
                        placeholder="Email"
                        label="Email"
                        keyboardType="numeric"
                    />
                    <AppInputField
                        placeholder="Password"
                        label="Password"
                        keyboardType="text"
                    />


                </View>
                <View style={{ alignItems: "center", padding: 10 }}>
                    <AppButton
                        customstyle={[{ width: "100%" }]}
                        title="Sign in to home"
                    />

                </View>






            </View>


        </View>
    );
}

export default SignIn;