import React, { useState, useContext } from "react"
import firebase from "../../../firebase"
import StyledLoginModal from "./LoginModal.styled"
import InputArea from "../../molecules/InputArea"
import Button from "../../atoms/Button"
import { AuthContext } from "../../Layout"

const LoginModal = ({ setOpenLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useContext(AuthContext)
    const onSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        setUser(user)
                        console.log(user)
                        // navigate("/")
                    }
                })
            })
            .catch(error => {
                alert(error)
            });
    }
    return (
        <StyledLoginModal>
            <div className="modal_box">
                <h1>ログイン画面</h1>
                <form onSubmit={onSubmit}>
                    <InputArea
                        value={email}
                        labelTitle="E-mail"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        label="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputArea
                        value={password}
                        labelTitle="Password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        label="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button value="ログイン" color="limegreen" type="submit" />
                    <Button value="キャンセル" color="#444" onClick={() => setOpenLogin(false)} />
                </form>
            </div>
        </StyledLoginModal>
    )
}

export default LoginModal