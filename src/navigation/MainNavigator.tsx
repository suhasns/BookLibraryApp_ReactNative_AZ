
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookDetails from '../screens/BookDetails'
import Header from '../components/Header';
import React from 'react';


type RootStackParamList = {
  HomeScreen: undefined;
  BookDetails: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerTitle: () => <Header />
      })} />
    {/* <Stack.Screen
      name="BookDetails"
      component={BookDetails}
      options={({ navigation }) => ({
        headerTitle: () => <Header />
      })} /> */}
  </Stack.Navigator>
);

export default MainNavigator;