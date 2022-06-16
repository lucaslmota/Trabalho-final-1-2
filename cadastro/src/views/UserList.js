import React, { useContext } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import UserContext from "../context/UserContext";
import users from '../data/User'

export default props => {

    const { state, dispatch } = useContext(UserContext)
    console.warn(Object.keys(ctx.state))

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }


    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{ source: { uri: user.url } }}
                key={user.id}
                title={user.name}
                subtitle={user.title}
                bottomDivider
                rightElement={getUserItem(user)}
                onPress={() => props.navigation.navigate('UserForme', user)}

            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}

            />


        </View>
    )
}