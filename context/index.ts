import { AuthContext } from "@/context/authContext/AuthContext";
import { useContext } from "react";


export {default as AuthContextProvider} from "@/context/authContext/AuthContext";


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuthContext must be used within an AuthContextProvider")
    }
    return context
}