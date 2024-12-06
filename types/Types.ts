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
    containerStyle?:string;
    inputStyle?:string;
    onChange?:()=>string;
}