import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import routes from './server/routes';
//import express from 'express';
//import bodyParser from'body-parser';

import HomeScreen from "./screens/Homescreen";
import Results from "./screens/Results";
import Details from "./screens/Details";

const Stack = createStackNavigator();
//const app = express();

//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json());
//app.use('/', routes);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "orange",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#0c151d",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Streaming Browser",
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={({ route }) => ({
            title: `Showing results for: ${route.params.search}`,
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: `Loading ${route.params.title}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
