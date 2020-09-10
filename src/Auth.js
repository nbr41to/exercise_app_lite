import React, { useEffect, useState } from "react";
import firebase from "./firebase";


// contextの作成
// export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const toriaezu = () => {
        setUser({
            displayName: "testman",
            email: "testman@test.com",
            id: "testestest",
            photoURL: null,
        })
    }

    return (
        // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
        <AuthContext.Provider
            value={
                [user, setUser],
                [post, setPost],
                {
                    signout: signout,
                }
            }
        >
            {children}
        </AuthContext.Provider>
    );
};