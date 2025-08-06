import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import {useState} from 'react';


export default function App(){

    const [enteredText, setEnteredText] = useState('');
    const [currentGoal, setCurrentGoal] = useState([]);

    function gaolInputHandler(enteredText){
        setEnteredText(enteredText);
    }

   function addGoalHandler(){
    setCurrentGoal((currentGoal)=>[
        ...currentGoal,
        enteredText
    ]);
    setEnteredText('');
   }
    
    return(
        <View style= {styles.appContainer}>
            <View style= {styles.inputContainer}>
                <TextInput style= {styles.textInput} placeholder="Enter Goal"   value ={enteredText} onChangeText={gaolInputHandler}/>
                <Button title="ADD GOAL" onPress={addGoalHandler}/>
            </View>
            <View style= {styles.listGoal}>
                <Text style = {styles.listOfGoal}>List of Goals:</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'grey',
        padding: 3,

    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    textInput: {
        height: 40,
        width: 69,
        marginRight: 38,
        borderWidth: 1,
        borderColor: 'black'
    },
    listGoal:{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 3
    },
    listOfGoal:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})