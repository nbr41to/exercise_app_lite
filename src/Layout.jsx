import React, { useState, useContext, useEffect } from 'react';
import { Context } from './Context'

export default function Layout({ children }) {
    const { users, currentUser, setCurrentUser } = useContext(Context)
    // useEffect(() => {

    // }, [currentUser])
    return (
        <div>
            <header style={{ width: '100%', backgroundColor: "limegreen" }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>Exercise Share App</h1>
            </header>
            {currentUser ?
                <>
                    {children}
                    <button onClick={() => setCurrentUser(null)}>logout</button>
                </>
                :
                <div style={{ height: '80vh' }}>
                    <p>テスト版では,誰かでログインしてください</p>
                    <p>誰でログインしますか？</p>
                    {Object.keys(users).map((user, index) => <button key={index} onClick={() => setCurrentUser(user)}>{users[user].name}</button>)}
                </div>
            }
            <footer style={{ width: '100%', backgroundColor: "limegreen" }}>
                <p style={{ color: 'white', textAlign: 'center' }}>Copyright 2020 by Knob</p>
            </footer>
        </div>
    )
}