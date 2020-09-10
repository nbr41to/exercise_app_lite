import React, { useState } from 'react'
import firebase from '../../../firebase'
import LoginModal from "../../orgnisms/LoginModal"
import SignupModal from "../../orgnisms/SignupModal"
import Button from "../../atoms/Button"
import top_view from "../../../images/user4.jpg"
import StyledComponent from "./Top.styled"

const Top = ({ user, setUser }) => {
    const [openLogin, setOpenLogin] = useState(false)
    const [openSignup, setOpenSignup] = useState(false)

    const toriaezu = () => {
        firebase.firestore().collection("user").doc("testestest").get().then((doc) => {
            setUser(doc.data())
        })
        console.log(user)
    }

    return (
        <StyledComponent>
            <img src={top_view} />
            {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
            {openSignup && <SignupModal setOpenSignup={setOpenSignup} />}
            <div className="button-box">
                <Button value="ログイン" color="darkblue" onClick={() => setOpenLogin(true)} />
                <Button value="新規登録" color="limegreen" onClick={() => setOpenSignup(true)} />
                <Button value="とりあえずログイン" color="orange" onClick={toriaezu} />
            </div>
        </StyledComponent>
    )
}

export default Top
