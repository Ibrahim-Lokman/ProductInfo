import { StatusBar, StyleSheet } from "react-native";
import { AppColors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        backgroundColor: AppColors.bacgroundPrimary,
        paddingBottom: 20

    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 250,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: AppColors.primary,
    },

}
);