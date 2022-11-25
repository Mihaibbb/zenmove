import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import mainColors from "../../Colors/main";
import styles from "./Styles";
import LinearGradient from 'react-native-linear-gradient';
import Categories from "../../Categories/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SelectAutomobile = ({ route, navigation }) => {

    const [searchInput, setSearchInput] = useState("");
    
    return (
        <View style={styles.container}>

            <View style={styles.searchBar}>
                <FontAwesomeIcon 
                    icon={faMapPin}
                    size={24} 
                    color="#fff"
                />

                <TextInput 
                    style={styles.searchBarInput}
                    placeholder="Where to?"
                    value={searchInput}
                    onChangeText={setSearchInput}
                    placeholderTextColor="rgba(255, 255, 255, .5)"
                />
                
            </View>

            {Categories.map((category, idx) => (
                <LinearGradient 
                    colors={[mainColors[category.lightColor], mainColors[category.darkColor]]} 
                    style={styles.category}
                    key={idx}
                >
                    <TouchableOpacity style={styles.categoryClickable} onPress={() => navigation.navigate("map", { vehicle: category.name.toLowerCase(), color1: mainColors[category.lightColor], color2: mainColors[category.darkColor] })}>
                        {category.icon}
                        <Text style={styles.categoryText}>{category.name}</Text>
                    </TouchableOpacity>
               </LinearGradient>
            ))}

            
        </View>
    );
};

export default SelectAutomobile;