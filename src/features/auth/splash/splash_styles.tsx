import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
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
        color: 'royalblue',
    },

}
);