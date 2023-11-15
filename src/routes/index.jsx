import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { user, signOut } = useAuth();

    useEffect(() => {
        api.get("/users/validated", { withCredentials: true }).catch(error => {
            if (error.response?.status === 401) {
                signOut();
            }
        });
    }, []);

    return (
        <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
    );
}
