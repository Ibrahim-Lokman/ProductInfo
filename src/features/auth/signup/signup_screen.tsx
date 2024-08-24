import React from "react";
import { Text, View } from "react-native";
import App from "../../../../App";
import AppBar from "../../../components/authheader/authheader_component";
import AppInputField from "../../../components/textinput/textfield_component";


const SignUp = () => {
    return (
        <View>
            <AppBar title="Sign Up" onBackPressed={() => { }} />
            <AppInputField
                placeholder="Email"
                label="Email"
                keyboardType="numeric"
            />
        </View>
    );
}

export default SignUp;