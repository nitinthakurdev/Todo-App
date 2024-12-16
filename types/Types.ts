import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface IButtonProp {
  style: string;
  textStyle: string;
  onPress?: () => void;
  text: string;
}

export interface IInputProp {
  labelstyle?: string;
  label: string;
  secure?: boolean;
  inputStyle?: string;
  onChange?: (e: string) => void;
  onblur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  error?: string;
  multiline?: boolean;
}

export interface ITasks {
  title: string;
  description: string;
  status: string;
}


export interface IAuthContextProp {
  token:string | null;
  loading:boolean;
  loginUser:()=>void;
  logout:()=>void;
  todoData:any;
  getTodo:(value:number)=>Promise<void>;
}