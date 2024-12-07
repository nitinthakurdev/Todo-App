import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export interface IButtonProp {
    style:string;
    textStyle:string;
    onPress?:()=>void;
    text:string
}

export interface IInputProp {
    labelstyle?:string;
    label:string;
    secure?:boolean;
    inputStyle?:string;
    onChange?:(e:string)=>void;
    onblur?:(e:NativeSyntheticEvent<TextInputFocusEventData>)=>void;
    value:string;
    error?:String;
    numberOfLines?:number
}