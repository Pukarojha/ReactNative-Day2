import {StyleSheet, View, ScrollView} from 'react-native';
import PukarCard from './componenents/PukarCard';


export default function App(){
  const users =[
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mr.', 
      description: 'Software Engineer'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Pukar',
      description: "Software Developer"
    },{
      id: '3',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Pukar Ojha',
      description: "Senior Developer"
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mr.Pukar',
      description: "Software Programmer"
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mr. Pukar Ojha',
      description: "A senior Software Developer"
    }
    ,
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mr. Pukar Ojha',
      description: "A senior Software Engineer"
    },
    {
      id: '7',
      image: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Mr. Pukar Ojha',
      description: "A senior Software Engineer"
    }
  ]
  return(
    <ScrollView style = {styles.scrollView} >
    <View style= {styles.appContainer}>
      {users.map((user)=>(
        <PukarCard key={user.id} user = {user}/>
      ))}
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: 'grey'
  },
  appContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});