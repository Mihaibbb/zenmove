import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import styles from "./Styles";
import mainColors from "../../Colors/main";


const MainOptions = () => {

    const data = [
        {
            name: "Travel",
            color_light: mainColors.blue,
            color_dark: mainColors.blue2,
            key: 0,
        },

        {
            name: "Explore",
            color_light: mainColors.green,
            color_dark: mainColors.green2,
            key: 1
        },

        {
            name: "Eat",
            color_light: mainColors.yellow,
            color_dark: mainColors.yellow2,
            key: 2
        },

        {
            name: "Hotels",
            color_light: mainColors.purple,
            color_dark: mainColors.purple2,
            key: 3
        }
    ];

    const renderGroup = (item, idx) => {
        return (
            <TouchableOpacity style={styles.option} key={idx}>
                <Text>{item.name}</Text>
                <FontAwesomeIcon icon={item.icon} />
            </TouchableOpacity>
        );
    };

    return (
        <FlatList 
            style={styles.container} 
            numColumns={2}
            renderItem={({ item, idx }) => renderGroup(item, idx)}
        >
            
        </FlatList>
    );
};

export default MainOptions;