import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1, alignItems: "center", justifyContent: "center",}}>
                <Text>
                    This is the home screen.
                </Text>
            </View>
        )

    }
}
