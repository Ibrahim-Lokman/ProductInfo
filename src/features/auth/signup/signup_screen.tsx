import React from "react";
import { Text, View } from "react-native";
import App from "../../../../App";
import AppBar from "../../../components/authheader/authheader_component";


const SignUp = () => {
    return (
        <View>
            <AppBar title="Sign Up" onBackPressed={() => { }} />
        </View>
    );
}

export default SignUp;