import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForme from "./views/UserForme";
import { Button, Icon } from "@rneui/base";
import { UserProvider } from "./context/UserContext";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={() => {
                            return {
                                title: "Lista de Usuário",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForme")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForme"
                        component={UserForme}
                        options={{
                            title: "Formulário de usuário."
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#8a2be2"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}