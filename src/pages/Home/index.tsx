import Icone from "../../assets/Icone"
import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';


export const Home = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            enqueueSnackbar('E-mail inválido', { variant: "error" });
            return;
        }


        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/Profile');
                enqueueSnackbar('Sucesso', { variant: "success" })
            } else {
                alert('po man, não deu certo! :)');
                enqueueSnackbar('Erro', { variant: "error" })
            }
        }
    }


    return (
        <div className="flex flex-1 justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col w-[438px] h-[534px] items-center justify-center border rounded-lg shadow-2xl bg-white gap-6" >
                <Icone />
                <div className="flex flex-col gap-4">
                    <label>E-mail</label>
                    <input className="w-80 p-2 bg-gray-100 rounded-lg"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="@gmail.com" />
                </div>
                <div className="flex flex-col gap-3">
                    <label>Password</label>
                    <input className="w-80 p-2 bg-gray-100 rounded-lg"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="************"
                    />
                </div>
                <button className="px-[130px] py-2 bg-blue-900 border rounded-lg" onClick={handleLogin}>
                    <span className="text-white">Sign In</span>
                </button>
            </div>
        </div>
    );
}