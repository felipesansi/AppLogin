import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { Text, Button, Input, Icon } from 'react-native-elements';
import styles from './styles/Styles';

  export default function App() {
  return (
    <View style={styles.container}>
      <Text h3 style = {styles.texto}>Login</Text>
      <StatusBar style="auto" />

   <Input style = {styles.Input}  
        placeholder='E-mail'
        leftIcon={{ type: 'font-awesome', name: 'envelope' , color:'white' }}
         keyboardType='email-address'
   
   />

   <Input style = {styles.Input} 
          placeholder='Senha'
          leftIcon ={{type: 'font-awesome', name:'lock', color: 'white'}}
          secureTextEntry={true}

   />

<Button 
              title="Entrar"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              />
    </View>
  );
}


