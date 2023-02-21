import {TAnimationStyle} from "react-native-reanimated-carousel/lib/typescript/layouts/BaseLayout";
import * as React from "react";
import {Dimensions, View} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {interpolate} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import {SBImageItem} from "./components/SBImageItem";
import {faker} from "@faker-js/faker";

const Circular = () => {
    const itemSize = 80;
    const PAGE_WIDTH = Dimensions.get("window").width;
    const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;

    const animationStyle: TAnimationStyle = React.useCallback(
        (value: number) => {
            "worklet";

            const itemGap = interpolate(
                value,
                [-3, -2, -1, 0, 1, 2, 3],
                [-30, -15, 0, 0, 0, 15, 30],
            );

            const translateX
                = interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize])
                + centerOffset
                - itemGap;

            const translateY = interpolate(
                value,
                [-1, -0.5, 0, 0.5, 1],
                [60, 45, 40, 45, 60],
            );

            const scale = interpolate(
                value,
                [-1, -0.5, 0, 0.5, 1],
                [0.8, 0.85, 1.1, 0.85, 0.8],
            );

            return {
                transform: [
                    {
                        translateX,
                    },
                    {
                        translateY,
                    },
                    {scale},
                ],
            };
        },
        [centerOffset],
    );

    const styleItem: any = {
        backgroundColor: "purple",
        flex: 1,
        borderRadius: 50,
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
    }

    const renderItem = ({index}: { index: number }) => (
        <TouchableWithoutFeedback
            key={index}
            containerStyle={{flex: 1}}
            style={{flex: 1}}
        >
            <View style={styleItem}>
                <SBImageItem
                    sourceImage={faker.image.imageUrl(400, 400, "people", true)}
                    showIndex={false}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    )

    const data = new Array(12).fill(0).map((_, index) => index);
    const style = {
        width: PAGE_WIDTH,
        height: "100%",
        backgroundColor: "#010017",
    }

    return (
        <View style={{flex: 1}}>
            <Carousel
                width={itemSize}
                height={itemSize}
                style={style}
                loop
                autoPlay={true}
                data={data}
                renderItem={renderItem}
                customAnimation={animationStyle}
            />
        </View>
    );
}

export default Circular;