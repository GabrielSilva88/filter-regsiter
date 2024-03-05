import React, { useContext } from "react";
import { View, Text, Image } from "react-native";

import { DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {
    const { user } = useContext(AuthContext);
    return (
        <DrawerContentScrollView {...props}>

            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 25
                }}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{
                        width: 90, height: 90
                    }}
                    resizeMode="contain"
                />
                <Text style={{
                    fontSize: 18,
                    marginTop: 14
                }}>
                    Bem-Vindo
                </Text>

                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginBottom: 15,
                        paddingHorizontal: 20
                    }}>
                    {user && user.name}
                </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}