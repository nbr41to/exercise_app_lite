import React, { useContext, useEffect, useState } from 'react';
import firebase from "../../../firebase"
import { AuthContext } from "../../Layout"

const EditProfile = (props) => {
  const [user, setUser] = useContext(AuthContext);
  const [name, setName] = useState(user.name)
  const [photo, setPhoto] = useState()
  const [photoUrl, setPhotoUrl] = useState(user.photo_url) // 表示用

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
      setPhotoUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (photoUrl !== user.photo_url) {
      firebase.storage().ref(`${user.id}`).child(`${user.photo_name}`).delete()
        .then(() => {
          console.log("過去の画像の削除に成功")
        }).catch((error) => console.log(error))

      firebase.storage().ref(`${user.id}`).child(`${photo.name}`).put(photo)
        .then(() => {
          console.log('新しい画像の保存に成功');
          firebase.storage().ref(`${user.id}`).child(`${photo.name}`).getDownloadURL()
            .then((url) => {
              firebase.firestore().collection("user").doc(user.id).update({
                photo_name: photo.name,
                photo_url: url,
              })
            })
        });
    }
    if (name !== user.name) {
      firebase.firestore().collection("user").doc(user.id).update({
        name: name,
      })
    }
    props.closed(false)
  }

  console.log(user)
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>my profile</h1>
      <p>your photo</p>
      <p>※画像は現在変更できません！</p>
      {photoUrl && <img src={photoUrl} style={{ width: '200px', height: '200px', borderRadius: '100%' }} />}
      <input type="file" accept="image/*" onChange={(e) => handleImage(e)} />
      <br />
      <p>your name: {user.name}</p>
      <input type="text" placeholder={user.name} onChange={(e) => setName(e.target.value)} />
      <hr />
      <button onClick={onSubmit}>変更を適応する</button>
    </div >
  );
}

export default EditProfile;
