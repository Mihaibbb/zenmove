import styles from '../Screens/SelectAutomobile/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBus, faTaxi, faTrain, faTrainTram, faParking } from '@fortawesome/free-solid-svg-icons';

const Categories = [
    {
        name: "Bus",
        lightColor: "blue",
        darkColor: "blue2",
        icon: <FontAwesomeIcon icon={faBus} size={50} color='#fff' style={styles.categoryIcon} />,
        smIcon: <FontAwesomeIcon icon={faBus} size={35} color='rgba(255, 255, 255, .7)' style={styles.categoryIcon} />
    },

    {
        name: "Tramway",
        lightColor: "green",
        darkColor: "green2",
        icon: <FontAwesomeIcon icon={faTrainTram} size={50} color='#fff' style={styles.categoryIcon} />,
        smIcon: <FontAwesomeIcon icon={faTrainTram} size={35} color='#fff' style={styles.categoryIcon} />
    },

    {
        name: "Taxi",
        lightColor: "yellow",
        darkColor: "yellow2",
        icon: <FontAwesomeIcon icon={faTaxi} size={50} color='#fff' style={styles.categoryIcon} />,
        smIcon: <FontAwesomeIcon icon={faTaxi} size={35} color='#fff' style={styles.categoryIcon} />
    },

    {
        name: "Parking",
        lightColor: "purple",
        darkColor: "purple2",
        icon: <FontAwesomeIcon icon={faParking} size={50} color='#fff' style={styles.categoryIcon} />,
        smIcon: <FontAwesomeIcon icon={faParking} size={35} color='#fff' style={styles.categoryIcon} />
    },

];

export default Categories;
