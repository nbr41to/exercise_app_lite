import React, { useState, useContext, useEffect } from "react"
// import { AuthProvider, AuthContext } from "../Auth";
import LoginModal from "./orgnisms/LoginModal"
import SignupModal from "./orgnisms/SignupModal"
import Button from "./atoms/Button"
// import Image from "./Image"
import firebase from "../firebase";

export const AuthContext = React.createContext([null, () => { }]);

const Layout = ({ children }) => {
  const [user, setUser] = useState(null)
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)
  // const user = useContext(AuthContext)
  // useEffect(() => {
  //   // firebase.auth().onAuthStateChanged(user => {
  //   //   setUser(user)
  //   // })
  //   // setUser(firebase.auth().currentUser)
  //   console.log(user)
  // }, [user])

  const signout = () => {
    firebase.auth().signOut().then(() => {
      // navigate("/")
    }).catch(function (error) {
      alert(error)
    });
  }

  const toriaezu = () => {
    setUser({
      displayName: "testman",
      email: "testman@test.com",
      uid: "testestest",
    })
  }

  // console.log(user)
  // console.log(firebase.auth().currentUser)
  return (
    <AuthContext.Provider value={[user, setUser]}>
      {
        user ?
          <>
            {children}
            <Button value="ログアウト" color="#444" onClick={signout} />
          </>
          :
          <>
            <h1>ログインしてください</h1>
            {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
            {openSignup && <SignupModal setOpenSignup={setOpenSignup} />}
            <div>
              <Button value="ログイン" color="darkblue" onClick={() => setOpenLogin(true)} />
              <Button value="新規登録" color="limegreen" onClick={() => setOpenSignup(true)} />
              {/* <Image filename="eyecatch01.jpg" alt="eye-catch" /> */}
              <Button value="とりあえずログイン" color="orange" onClick={toriaezu} />
            </div>
          </>
      }
    </AuthContext.Provider >
  )
}


export default Layout