import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post(
                "/sessions",
                {
                    email,
                    password
                },
                { withCredentials: true }
            );
            const { user } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

            setData({ user });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar!");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");
        setData({});
    }

    async function updateDish({ dish, photoFile }) {
        try {
            if (photoFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("photo", photoFile);

                const response = await api.patch(
                    `/dishes/photo/${dish.id}`,
                    fileUploadForm,
                    { withCredentials: true }
                );
                dish.photo = response.data.photo;
            }

            await api.put("/dishes", dish, { withCredentials: true });

            localStorage.setItem("@foodexplorer:dish", JSON.stringify(dish));
            setData({ dish });
            alert("Prato atualizado!");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o prato");
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");

        if (user) {
            setData({
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                updateDish,
                user: data.user
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
