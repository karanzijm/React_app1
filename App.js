import React, {useState} from 'react';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );

  } else {
     return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
    />
     )
  }
  
}
