import styles from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faAngleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FlatList, ScrollView, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import GetLocation from 'react-native-get-location';


const Explore = ({ route, navigation }) => {

    const { knownLocation } = route.params;
    const [location, setLocation] = useState(knownLocation);
    const [currentPlaces, setCurrentPlaces] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [order, setOrder] = useState(1);

   
    useEffect(() => {
        (async () => {
            console.log(location);
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    query: query,
                    filter: filter,
                    order: order
                })
            };

            try {
                const request = await fetch("http://172.20.10.5:8000/explore/get-places", options);
                const response = await request.json();
                if (await response.success) setCurrentPlaces(response.data.results);
                
            } catch (e) {
                console.log(e);
            }
        
        })();
    }, [location]);

    useEffect(() => {
        if (currentPlaces && currentPlaces?.length) console.log(currentPlaces[0].photos[0].photo_reference)
    }, [currentPlaces]);

    return currentPlaces && currentPlaces?.length ? (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <View style={styles.goBack}>
                    <FontAwesomeIcon icon={faAngleLeft} style={styles.goBackIcon} />
                </View>

                <View style={styles.pageName}>
                    <Text style={styles.title}>Explore locations</Text>
                </View> 

                <View style={styles.searchContainer}>
                    <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
                </View>
            </View>


            <ScrollView
                style={styles.list}
                horizontal={false}
            >

                <Text style={styles.title}>Titlul Lista</Text>
               
                    {currentPlaces.map((place, placeIdx) => (
                        <View style={styles.place} key={placeIdx}>
                            <View>
                                <Image source={{ 
                                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyCffhtcZzCpacqM1uAQeL00rHMo0A8ieB0`
                                 }} />
                            </View>
                        </View>
                    ))}
                
    
            </ScrollView>
        </View>
    ) : null;
};

export default Explore;