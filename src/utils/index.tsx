import {TransformsStyle} from "react-native";

const fruit_0 = require("../../assets/fruit-0.png");
const fruit_1 = require("../../assets/fruit-1.png");
const fruit_2 = require("../../assets/fruit-2.png");

export const fruitItems = [fruit_0, fruit_2, fruit_1];

export interface Point {
    x: number
    y: number
}

export interface Size {
    width: number
    height: number
}


export const withAnchorPoint : any = (
    transform: TransformsStyle,
    anchorPoint: Point,
    size: Size,
) => {
     "worklet";
}
