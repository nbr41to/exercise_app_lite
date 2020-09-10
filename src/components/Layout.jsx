import React, { useState } from "react"
import { GlobalStyle } from "../GlobalStyle"
// import { AuthProvider, AuthContext } from "../Auth";
import Header from "./Header"
import Top from "./pages/Top"
import Footer from "./Footer"
import LoginModal from "./orgnisms/LoginModal"
import SignupModal from "./orgnisms/SignupModal"
import Button from "./atoms/Button"
import top from "../images/user4.jpg"
import firebase from "../firebase";

export const AuthContext = React.createContext([null, () => { }]);

const Layout = ({ children }) => {
  const [user, setUser] = useState(null)
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)

  const signout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null)
    }).catch(function (error) {
      alert(error)
    });
  }


  // console.log(user)
  // console.log(firebase.auth().currentUser)
  return (
    <AuthContext.Provider
      value={[user, setUser]}
    >
      <GlobalStyle />
      <Header user={user} signout={signout} />
      {
        user ?
          <>
            {children}
          </>
          :
          <>
            <Top user={user} setUser={setUser} />
          </>
      }
      <Footer />
    </AuthContext.Provider>
  )
}


export default Layout