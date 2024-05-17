import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import { useSnackbar } from "notistack";



export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();
    const { enqueueSnackbar } = useSnackbar()



    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);

        if (data !== undefined) {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user)); 
            localStorage.setItem('tokens', JSON.stringify(data.tokens)); 
            return true;
        }
        return false;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem('tokens')
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}

