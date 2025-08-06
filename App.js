import {StyleSheet, View, Text, TextInput, Button} from "react-native";
import {useState} from 'react';


export default function App(){

    const [enteredText, setEnteredText] = useState('');
    const[currentGoals, setCurrentGoals] = useState([]);

    const addGoalHandler =()=>{
        setCurrentGoals((currentGoals)=>[...currentGoals, enteredText]);
        setEnteredText('');
    }

    return(
        <View style= {styles.appContainer}>
            <View style = {styles.inputContainer}>
                <TextInput style = {styles.inputField} placeholder="Enter Goals" value = {enteredText} onChangeText={setEnteredText}/>
                <Button title="Add Goals" onPress={addGoalHandler} />
            </View>
            <View >
                <Text style= {styles.listGoals} >List of Goals: </Text>
                {currentGoals.map((goal,index)=><Text key={index}> {goal}</Text>)}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
    ,inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 15
    },
    inputField:{
        height: 30,
        width: '50%',
        marginRight: 80,
        borderRadius: 13,
        borderColor: 'grey'
    }
    , listGoals:{
        paddingBottom: 19,
        borderBottomWidth: 1,
        borderColor: 'grey'
    }
})