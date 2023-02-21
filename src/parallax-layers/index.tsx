import * as React from "react";
import {Dimensions, View} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Card from "./Card";


function ParalaxLayers() {

    const PAGE_WIDTH = Dimensions.get("window").width;
    const PAGE_HEIGHT = Dimensions.get("window").height;
    const colors = ["#fda282", "#fdba4e", "#800015"];

    const baseOptions = {
        vertical: false,
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
    } as const;

    const renderItem = ({index, animationValue}: { index: number, animationValue: any }) => {
        return (
            <Card
                animationValue={animationValue}
                key={index}
                index={index}
            />
        )
    }

    const withAnimation = {
        type: "spring",
        config: {
            damping: 9,
        }
    } as const

    return (
        <View style={{flex: 1}}>
            <Carousel
                {...baseOptions}
                loop
                autoPlay={true}
                withAnimation={withAnimation}
                autoPlayInterval={1500}
                data={colors}
                renderItem={renderItem}
            />
        </View>
    );
}


export default ParalaxLayers;