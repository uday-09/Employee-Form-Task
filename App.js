import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screen imports
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import EmployeeForm from "./screens/EmployeeForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EmployeeForm">
          <Stack.Screen
            name="EmployeeForm"
            component={EmployeeForm}
            options={{
              headerTitle: "Employee Form",
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
