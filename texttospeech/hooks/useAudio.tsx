import Sound from 'react-native-sound';

const useAudio: React.FC = () =>{
    let sound: Sound | null = null;

  useEffect(() => {
    // Carga el archivo de audio (puedes cambiar la ruta a tu archivo de audio)
    sound = new Sound('', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Error al cargar el audio', error);
        return;
      }
      console.log('Audio cargado correctamente');

      // Reproduce el audio
      sound.play((success) => {
        if (success) {
          console.log('Audio reproducido correctamente');
        } else {
          console.error('Error al reproducir el audio');
        }
      });
    });
  }, []);

  return (
    <View>
        <Text>Hello!</Text>
    </View>
  );
}