import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        width: "100%",
        minHeight: Dimensions.get("window").height,
        paddingTop: Platform.OS === "ios" ? 60 : 35
    },

    topMenu: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        
    },

    firstRow: {
        flexDirection: "row",
        height: "100%"
    },

    place: {
        flexDirection: "row",
        
    },

    title: {
        fontSize: 24,
        color: "#fff",
        flex: 1,
        fontWeight: "800"
    },

    goBack: {
        flex: 1,
    
    },

    // goBackIcon: {
    //     width: 50,
    //     height: 50,
    //     backgroundColor: "#fff",
       
    //     fontSize: 20,
    //     padding: 25,
        
    // },

    searchContainer: {
        flex: 1
    },
    
});

export default styles;