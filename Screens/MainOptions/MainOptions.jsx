import { Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import mainColors from "../../Colors/main";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import GetLocation from 'react-native-get-location';
import { useEffect } from "react";
import { useState } from "react";


const MainOptions = ({ route, navigation }) => {

    const [location, setLocation] = useState();

    const data = [
        {
            name: "Travel",
            color_light: mainColors.blue,
            color_dark: mainColors.blue2,
            key: 0,
            imgSource: require("../../images/travel.jpeg"),
        },

        {
            name: "Explore",
            color_light: mainColors.green,
            color_dark: mainColors.green2,
            key: 1,
            imgSource: require("../../images/explore.jpeg"),
        },

        {
            name: "Eat",
            color_light: mainColors.yellow,
            color_dark: mainColors.yellow2,
            key: 2,
            imgSource: require("../../images/restaurant.jpeg"),
        },

        {
            name: "Hotels",
            color_light: mainColors.purple,
            color_dark: mainColors.purple2,
            key: 3,
            imgSource: {
                uri: 'https://lh3.googleusercontent.com/places/AM5lPC-_FnCenBSjvpxlqxNgm7JUgKb2_QuZu-nqp97u8ErPs5rykkZXjc9Vn7XBPhHI0ULnRZNCBpH4k-VEJ6h-URJ0F84YPcJkflM=s1600-w400'
            },
        }
    ];

    const renderGroup = (item, idx) => {
        return (
            <ImageBackground source={item.imgSource} style={styles.cardContainer}>
                <TouchableOpacity style={styles.option} key={idx}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    };

    useEffect(() => {
        (async () => {
            try {
                setLocation(await GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 0
                }));
            } catch (e) {
                console.log(e);
            }
           
        })();
    }, []);

    return (
        <ScrollView style={{ width: "100%", minHeight: Dimensions.get("window").height, backgroundColor: "#000" }}>
            <Image source={require("../../images/logo1.png")} style={{ width: 225, height: 225, marginVertical: 35, marginLeft: 20, alignSelf: "center" }} />
 
            <View style={{ width: "100%", borderRadius: 15, flexDirection: "row", alignSelf: "center", marginVertical: 15 }}>

                <ImageBackground 
                    source={require("../../images/travel.jpeg")} 
                    style={styles.cardContainer}   
                    imageStyle={{ borderRadius: 15 }}
                >
                    <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("choose-transport")}>
                        <Text style={styles.optionText}>Travel</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground 
                    source={require("../../images/explore.jpeg")} 
                    style={styles.cardContainer}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <TouchableOpacity style={styles.option} onPress={() => location && navigation.navigate("explore", { knownLocation: location })}>
                        <Text style={styles.optionText}>Explore</Text>
                    </TouchableOpacity>
                </ImageBackground>

            </View>

            <View style={{ width: "100%", flexDirection: "row", alignSelf: "center" }}>

                <ImageBackground 
                    source={require("../../images/restaurant.jpeg")} 
                    style={styles.cardContainer}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>Restaurants</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground 
                    source={require("../../images/accomodation.jpeg")} 
                    style={styles.cardContainer}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>Hotels</Text>
                    </TouchableOpacity>
                </ImageBackground>

                </View>
            
        </ScrollView>
        
    );
};

export default MainOptions;