import {View,Text, StyleSheet, Image} from 'react-native';


const PukarCard =({user})=>{

    
    return(
        <View style= {styles.appContainer}>
            <Image style = {styles.image} source = {{uri: user.image}} />
            <Text style = {styles.title}>{user.title}</Text>
            <Text style = {styles.description}>{user.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    appContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: 'black',
        padding: 21
    },
    title:{
        fontSize: 13,
        fontStyle: 'italic',
        color: 'red'
    },
    description:{
        fontSize: 23,
        fontStyle: 'italic',
        color: 'grey'
    }
})

export default PukarCard;