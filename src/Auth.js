import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { navigate } from "gatsby"

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [user])

    return (
        // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
        <AuthContext.Provider
            value={user}
        >
            {children}
        </AuthContext.Provider>
    );
};