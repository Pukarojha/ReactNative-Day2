import { StyleSheet, View, Text } from "react-native";

function GoalItem(){
    return(
        <View style={styles.goalItem}>
            <Text style= {styles.goalText}>{props.text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'yellow'
    },
    goalText:{
        fontSize: 18,
        color: 'grey'
    }
})
export default GoalItem;