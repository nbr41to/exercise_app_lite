import React, { useState, useContext } from "react"
import firebase from "../../../firebase"
import StyledSignupModal from "./SignupModal.styled"
import InputArea from "../../molecules/InputArea"
import Button from "../../atoms/Button"

const SignupModal = ({ setOpenSignup }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPassword_confirm] = useState("")
    const onSubmit = (e) => {
        if (password === password_confirm) {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                firebase.auth().currentUser.updateProfile({ displayName: name });
            }).then(() => {
                alert('sign up!');
            }).catch((error) => {
                alert(error);
            });
        } else {
            alert("パスワードが一致しません！")
        }
    }

    return (
        <StyledSignupModal>
            <div className="modal_box">
                <h1>新規登録画面</h1>
                <form onSubmit={onSubmit}>
                    <InputArea
                        value={name}
                        labelTitle="User name"
                        type="text"
                        name="name"
                        placeholder="user name"
                        label="name"
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <InputArea
                        value={password_confirm}
                        labelTitle="Password for confirmation"
                        type="password"
                        name="password_confirm"
                        placeholder="Password"
                        label="password_confirm"
                        onChange={(e) => setPassword_confirm(e.target.value)}
                    />
                    {(password === password_confirm) ?
                        <p>ぱすわーどおけまる</p>
                        :
                        <p>パスワードが一致しません</p>}
                    <Button value="新規アカウント作成！" color="pink" type="submit" />
                    <Button value="キャンセル" color="#444" onClick={() => setOpenSignup(false)} />
                </form>
            </div>
        </StyledSignupModal>
    )
}

export default SignupModal