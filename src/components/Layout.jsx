import React, { useState } from "react"
// import { AuthProvider, AuthContext } from "../Auth";
import LoginModal from "./orgnisms/LoginModal"
import SignupModal from "./orgnisms/SignupModal"
import Button from "./atoms/Button"
import top from "../images/user4.jpg"
import firebase from "../firebase";

export const AuthContext = React.createContext([null, () => { }]);

const Layout = ({ children }) => {
  const [user, setUser] = useState(null)
  // const [users, setUsers] = useState(null)
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)

  const signout = () => {
    firebase.auth().signOut().then(() => {
    }).catch(function (error) {
      alert(error)
    });
  }

  const toriaezu = () => {
    firebase.firestore().collection("user").doc("testestest").get().then((doc) => {
      setUser(doc.data())
    })
    console.log(user)
  }

  // console.log(user)
  // console.log(firebase.auth().currentUser)
  return (
    <AuthContext.Provider
      value={[user, setUser]}
    >
      <header header style={{ color: 'white', backgroundColor: "limegreen" }}>
        <h1>Exercise Share App</h1>
      </header>
      {
        user ?
          <>
            {children}
            <Button value="ログアウト" color="#444" onClick={signout} />
          </>
          :
          <>
            <img src={top} style={{ height: "220px" }} />
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
      <footer>© 2020 nobCo.</footer>
    </AuthContext.Provider>
  )
}


export default Layout