import {StyleSheet, View, Text, TextInput, Button,ScrollView} from 'react-native';
import {useState} from 'react';


export default function App(){

    const [enteredText, setEnteredText] = useState('');
    const [courseGoal, setCourseGoal] = useState([]);


    function inputHandler(enteredText){
        setEnteredText(enteredText);
    }

    function addGoalHandler(courseGoal){
        setCourseGoal((courseGoal)=>[
            ...courseGoal, 
            enteredText
        ]);
        setEnteredText('');
    }
    return(
        <View style= {styles.appContainer}>
            <View style = {styles.inputContainer}>
                <TextInput style = {styles.inputTextField} placeholder='Enter Goals' onChangeText={inputHandler} value = {enteredText}/>
                <Button title='Add Goal' onPress={addGoalHandler}/>

            </View>
            <View >
                <Text style= {styles.listGoal}>List of Goals: </Text>
                
             
            </View>
            <ScrollView
                alwaysBounceVertical= {false}
                showsVerticalScrollIndicator= {true}
            >
                {courseGoal.map((goal)=>(<Text style ={styles.listOfGoal} key={goal}>{goal}</Text>))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputTextField:{
        height: 40,
        width: 130,
        marginRight: 59
    },
    listGoal:{
        borderBottomWidth: 9,
        borderBottomColor: 'grey'
    },
    listOfGoal:{
        flexDirection: 'column'
    }
})