import React, { useState, useContext } from "react"
import firebase from "../../../firebase"
import StyledSignupModal from "./SignupModal.styled"
import InputArea from "../../molecules/InputArea"
import Button from "../../atoms/Button"
import { AuthContext } from "../../Layout"

const SignupModal = ({ setOpenSignup }) => {
    const [user, setUser] = useContext(AuthContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPassword_confirm] = useState("")

    // useEffect




    // await functions

    const getDefaultPhotoUrl = () => {
        return firebase.storage().ref().child("default/user_default.png").getDownloadURL()
    }

    const onSubmit = (e) => {
        if (password === password_confirm && password) {
            e.preventDefault()
            // EmailとPassを保存します
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            setUser({
                                id: user.uid,
                                name: name,
                                photo_url: "https://firebasestorage.googleapis.com/v0/b/share-exercise-app.appspot.com/o/default%2Fuser_default.png?alt=media&token=febc3e55-2129-4132-a4d0-d1d885f34a6e",
                                photo_name: "",
                                exercises: [],
                                nice_total: 0,
                            })

                            firebase.firestore().collection("user").doc(user.uid).set({
                                id: user.uid,
                                name: name,
                                photo_url: "https://firebasestorage.googleapis.com/v0/b/share-exercise-app.appspot.com/o/default%2Fuser_default.png?alt=media&token=febc3e55-2129-4132-a4d0-d1d885f34a6e",
                                photo_name: "",
                                exercises: [],
                                nice_total: 0,
                            }).then(() => {
                                alert('アカウント新規作成しました！');
                            }).catch((error) => {
                                setUser(null)
                                alert(error)
                            })
                        }
                    })
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