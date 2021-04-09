import React from 'react';
import { LogBox, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import WeatherDetail from '../components/WeatherDetail';

LogBox.ignoreAllLogs();
const AppContext = React.createContext();

const AppContainer = () => {
  const Stack = createStackNavigator();

  return (
    <AppContext.Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WeatherApp"
            component={Home}
            options={{
              title: 'WeatherApp',
              headerStyle: {
                backgroundColor: '#00804A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
          />
          <Stack.Screen
            name="WeatherDetail"
            component={WeatherDetail}
            options={{
              title: 'WeatherApp',
              headerStyle: {
                backgroundColor: '#00804A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default AppContainer;