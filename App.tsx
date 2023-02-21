import {Dimensions, StyleSheet, View} from 'react-native';
import React from "react";
import ParalaxLayers from "./src/parallax-layers";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: screenWidth,
            height: screenHeight,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={styles.container}>
                <ParalaxLayers/>
                {/*<Circular/>*/}
            </View>
        </GestureHandlerRootView>
    );
}

