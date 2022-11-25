import LinearGradient from "react-native-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Categories from "../../Categories/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styles from "./Styles";
import { faAngleLeft, faBible, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";

const Route = ({ route, navigation }) => {
    
    const price = "$2.00";
    
    const { vehicleType, vehicleName, vehicleId, longitude, latitude, arrivesAt, color1, color2 } = route.params;
    
    const leavesAt = new Date(arrivesAt).getTime() + 1000 * 60 * 1;

    const category = Categories.find(categ => categ.name.toLowerCase() === vehicleType.toLowerCase());

    const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    };

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.backButton} colors={[color1, color2]}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faAngleLeft}
                        size={30} 
                        color="#fff" 
                    />
                </TouchableOpacity>
            </LinearGradient>
            
            <MapView 
                initialRegion={initialRegion}
                zoomEnabled={true}
                showsUserLocation={true}
                style={styles.mapContainer}
                userInterfaceStyle={'dark'}
            >
                <Marker
                    coordinate={{
                        latitude, 
                        longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}

                    title={''}
                >
                    <TouchableOpacity>

                        <LinearGradient style={styles.pinGradient} colors={[color1, color2]}>
                            <FontAwesomeIcon icon={faMapPin} size={35} color='#fff' />

                        </LinearGradient>
                    </TouchableOpacity>
                </Marker>
            </MapView>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.content}>

                    <View style={styles.multipleCards}>
                        <LinearGradient style={styles.card} colors={[ color2, color1 ]}>
                            
                            <View style={styles.infoContainer}>
                                {category.icon}
                                <Text style={styles.infoText}>{category.name}'s Number</Text>
                            </View>

                            <Text style={styles.responseText}>
                                {vehicleName}
                            </Text>

                           
                        </LinearGradient>
                            
                        <LinearGradient style={styles.card} colors={[ color2, color1 ]}>
                            
                            <View style={styles.infoContainer}>
                                <FontAwesomeIcon style={{ maxWidth: 50 }} icon={faClock} size={35} color="#fff" />
                                <Text style={styles.infoText}>Arriving</Text>
                            </View>
                            
                            <Text style={styles.responseText}>
                                {`${new Date(arrivesAt).getHours() < 10 ? "0" : ""}${new Date(arrivesAt).getHours()}`}:{`${new Date(arrivesAt).getMinutes() < 10 ? "0" : ""}${new Date(arrivesAt).getMinutes()}`}
                            </Text>
                            
                        </LinearGradient>

                        <LinearGradient style={styles.card} colors={[ color2, color1 ]}>
                            
                            <View style={styles.infoContainer}>
                                <FontAwesomeIcon style={{ maxWidth: 50 }} icon={faClock} size={35} color="#fff" />
                                <Text style={styles.infoText}>Leaving</Text>
                            </View>
                            
                            <Text style={styles.responseText}>
                                {`${new Date(leavesAt).getHours() < 10 ? "0" : ""}${new Date(leavesAt).getHours()}`}:{`${new Date(leavesAt).getMinutes() < 10 ? "0" : ""}${new Date(leavesAt).getMinutes()}`}
                            </Text>
                            
                        </LinearGradient>

                        <LinearGradient style={styles.card} colors={[ color2, color1 ]}>
                            <View style={styles.infoContainer}>
                                <FontAwesomeIcon icon={faMoneyBill1} size={35} color="#fff" />
                                <Text style={styles.infoText}>Price</Text>
                            </View>

                           
                            <Text style={styles.responseText}>
                                {price}
                            </Text>
                            
                            
                        </LinearGradient>
                    </View>
                    
                </ScrollView>
                
                <TouchableOpacity
                    onPress={() => console.log("Payment created successfully!")}
                   
                >
                    <LinearGradient 
                        style={styles.pay} 
                        colors={["rgb(44,203,115)", "rgb(34,176,76)"]}
                    >
                        <Text style={styles.payText}>Buy Ticket</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Route;