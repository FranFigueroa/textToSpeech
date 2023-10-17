import { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import Tts from 'react-native-tts';
import { useSegmentarTextoEnOraciones } from './hooks/useSegmentarTextoEnOraciones';

const App: React.FC = () => {

  useEffect(() =>{
    const textoEjemplo = 'Oracion1. Oracion2';
    const oracionesSegmentadas = useSegmentarTextoEnOraciones(textoEjemplo);
    console.log(oracionesSegmentadas)
  },[]);  

  return(
    <View>
      <Text>aoeu. Texto ejemplo</Text>
    </View>
  )
  
};

export default App;
