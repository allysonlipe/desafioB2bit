import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContext);
    const tokens = localStorage.getItem('tokens');

    if (!tokens) {
        return <Home />
    } else {
        <Profile />
    }

    return children;
}