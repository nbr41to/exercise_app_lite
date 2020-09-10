import React, { useContext, useEffect, useState } from 'react';
import firebase from "../firebase"
import { AuthContext } from "../components/Layout"

const EditProfile = (props) => {
  const [user, setUser] = useContext(AuthContext);
  const [name, setName] = useState()
  const [photo, setPhoto] = useState()
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl) // 表示用

  useEffect(() => {
    setPhotoUrl(user.photo_url)
  })

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
      setPhotoUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const onSubmit = () => {
    firebase.storage().ref(`${user.id}`).child(`${user.photo_name}`).delete()
    firebase.storage().ref(`${user.id}`).child(`${photo.name}`).put(photo)
      .then(() => {
        console.log('Uploaded a blob or file!');
        firebase.storage().ref(`${user.id}/${photo.name}`).getDownloadURL()
          .then((url) => {
            setPhotoUrl(url)
          });
      });
    firebase.firestore().collection("user").doc(user.id).update({
      name: name,
      photo: photo.name,
      photoURL: photoUrl,
    })
    // props.closed(false)
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
