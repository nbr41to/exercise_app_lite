import React, { useContext, useEffect, useState } from 'react';
import firebase from "../firebase"
import { AuthContext } from "../components/Layout"

const EditProfile = (props) => {
  const [user, setUser] = useContext(AuthContext);
  const [name, setName] = useState()
  const [photo, setPhoto] = useState()

  const onSubmit = () => {
    firebase.auth().currentUser.updateProfile({
      displayName: name,
      // photoURL: photo,
    })
    props.closed(false)
    setUser(
      {
        ...user,
        displayName: name,
      }
    )
  }
  console.log(user)
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>my profile</h1>
      <p>your photo</p>
      <p>※画像は現在変更できません！</p>
      {user.photoURL !== null && <img src={user.photoURL} style={{ width: '200px', height: '200px', borderRadius: '100%' }} />}
      <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
      <br />
      <p>your name: {user.displayName}</p>
      <input type="text" placeholder={user.displayName} onChange={(e) => setName(e.target.value)} />
      <hr />
      <button onClick={onSubmit}>変更を適応する</button>
    </div >
  );
}

export default EditProfile;
