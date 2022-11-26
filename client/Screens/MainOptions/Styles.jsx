import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    cardContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        aspectRatio: 0.75,
        marginHorizontal: 10,
       

       
    },


    option: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .45)",
        borderRadius: 15,
        zIndex: 10
    },

    optionText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "900",
        
    }
});

export default styles;