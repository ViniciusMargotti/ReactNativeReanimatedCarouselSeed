import * as React from "react";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {fruitItems, withAnchorPoint} from "../../utils";
import {Dimensions} from "react-native";

interface CardProps {
    index: number
    animationValue: Animated.SharedValue<number>
}

const Card: React.FC<CardProps> = (props) => {

    const {index, animationValue} = props;

    const colors = ["#fda282", "#fdba4e", "#800015"];
    const WIDTH = Dimensions.get("window").width / 1.5;
    const HEIGHT = Dimensions.get("window").height / 1.5;

    const cardStyle = useAnimatedStyle(() => {

        const scale = interpolate(
            animationValue.value,
            [-0.1, 0, 1],
            [0.95, 1, 1],
            Extrapolate.CLAMP,
        );

        const translateX = interpolate(
            animationValue.value,
            [-1, -0.2, 0, 1],
            [0, WIDTH * 0.3, 0, 0],
        );

        const transform = {
            transform: [
                {scale},
                {translateX},
                {perspective: 200},
                {
                    rotateY: `${interpolate(
                        animationValue.value,
                        [-1, 0, 0.4, 1],
                        [30, 0, -25, -25],
                        Extrapolate.CLAMP,
                    )}deg`,
                },
            ],
        };

        return {
            ...withAnchorPoint(
                transform,
                {x: 0.5, y: 0.5},
                {width: WIDTH, height: HEIGHT},
            ),
        };
    }, [index]);

    const blockStyle = useAnimatedStyle(() => {
        const translateX = interpolate(
            animationValue.value,
            [-1, 0, 1],
            [0, 80, 80],
        );

        const translateY = interpolate(
            animationValue.value,
            [-1, 0, 1],
            [0, -40, -40],
        );

        const rotateZ = interpolate(
            animationValue.value,
            [-1, 0, 1],
            [0, 0, -25],
        );

        return {
            transform: [
                {translateX},
                {translateY},
                {rotateZ: `${rotateZ}deg`},
            ],
        };
    }, [index]);

    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Animated.View
                style={[
                    {
                        backgroundColor: colors[index],
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        width: WIDTH,
                        height: HEIGHT,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 10.32,

                        elevation: 16,
                    },
                    cardStyle,
                ]}
            />
            <Animated.Image
                source={fruitItems[index % 3]}
                style={[
                    {
                        width: WIDTH * 0.8,
                        borderRadius: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        zIndex: 999,
                    },
                    blockStyle,
                ]}
                resizeMode={"contain"}
            />
        </Animated.View>
    );
};

export default Card;