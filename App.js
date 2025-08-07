import {StyleSheet, View, Text, TextInput, Button, FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem from './componenents/GoalItem';


export default function App(){

    const [enteredText, setEnteredText] = useState('');
    const [courseGoal, setCourseGoal] = useState([]);


    function inputHandler(enteredText){
        setEnteredText(enteredText);
    }

    function addGoalHandler(courseGoal){
        setCourseGoal((courseGoal)=>[
            ...courseGoal, 
            {text: enteredText, id: Math.random().toString()}
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
          
               <FlatList 
               data= {courseGoal}
               renderItem={(itemData)=>{
                return(
                    <GoalItem text= {itemData.item.text}/>
                );
               }}
               keyExtractor={(item, index)=>{
                return item.id;
               }}
               alwaysBounceVertical={false}
               />

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