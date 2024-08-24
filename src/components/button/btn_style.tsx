import { StyleSheet } from "react-native";
import { AppColors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        borderRadius: 10,
        padding: 10,
        width: '80%',

    },

    title: {
        color: AppColors.contentOnPrimary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
