import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default class Meteors extends React.Component{
    render(){
        return(
            <View style = {{flex:1, alignItems: "center", justifyContent: "center",}}>
                <Text>
                    This is the meteors screen.
                </Text>
            </View>
        )

    }
}
