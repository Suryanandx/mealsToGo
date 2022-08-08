
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import * as firebase from 'firebase'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';


const firebaseConfig = {
  apiKey: "AIzaSyAWcZdnGVp5LhbrmTZeHXog2ICmO9GQOt8",
  authDomain: "meals-to-go-dfb5d.firebaseapp.com",
  projectId: "meals-to-go-dfb5d",
  storageBucket: "meals-to-go-dfb5d.appspot.com",
  messagingSenderId: "289364352009",
  appId: "1:289364352009:web:73420f53f3fbd1d110acd8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default function App (){

  return (
    <>
    <ThemeProvider theme={theme}>
    <AuthenticationContextProvider>

      <Navigation/>
 
    </AuthenticationContextProvider>
    </ThemeProvider>
    <ExpoStatusBar style='auto' />
  </>
  );
}
