import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default class ISSLocation extends React.Component{
    render(){
        return(
            <View style = {{flex:1, alignItems: "center", justifyContent: "center",}}>
                <Text>
                    This is the ISS location screen.
                </Text>
            </View>
        )

    }
}
