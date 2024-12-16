import { IAuthContextProp } from "@/types/Types";
import { createContext, FC, ReactElement, ReactNode, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { AxiosHandler } from "@/config/AxiosConfig";
import { router } from "expo-router";

export const AuthContext = createContext<IAuthContextProp | undefined>(undefined);

const AuthContextProvider:FC<{children:ReactNode}> = ({children}):ReactElement => {
    const [token,setToken] = useState<string | null>(SecureStore.getItem('token'));
    const [loading,setLoading] = useState<boolean>(false);
    const [todoData,setTodoData] = useState<any>(null)
    

    const loginUser = ():void => {
        setToken("this is your token")
        SecureStore.setItemAsync('token',"this is your token");
        router.replace("/(stack)/(tab)/Home");
    }
    const logout = ():void => {
        SecureStore.deleteItemAsync('token');
        router.replace("/(auth)/signin")
    }

    const getTodo = async (value:number):Promise<any> => {
        try {
            setLoading(true)
            const res = await AxiosHandler.get(`/todos?_start=0&_limit=${10 * value}`);
            setTodoData(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



    

    useEffect(()=>{
        getTodo(1)
    },[])
   
    return (
        <AuthContext.Provider value={{token,loading,loginUser,logout,todoData,getTodo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;