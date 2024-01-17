import { Loading } from '@components/Loading';
import { useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Box, NativeBaseProvider } from 'native-base';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/theme';
import { Singup } from "@screens/Singup";
import { Routes } from '@routes/index';

export default function App() {
const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"light-content"}
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
