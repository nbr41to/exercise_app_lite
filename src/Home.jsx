import React, { useState, useEffect, useContext } from 'react';
import firebase from "./firebase"

import NewPost from "./Modal/NewPost"
import EditExercise from "./Modal/EditExercise"
import EditProfile from "./Modal/EditProfile"
import Post from "./Post"
import { AuthContext } from "./components/Layout"



function Home() {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useContext(AuthContext)
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   firebase.firestore().collection("user")
  //     .onSnapshot((snapshot) => {
  //       let getUsers = snapshot.docs.map((doc) => {
  //         return doc.data();
  //       });
  //       setUsers(getUsers)
  //     });
  // }, [])

  console.log(user)
  // console.log(users)
  // console.log(users)
  console.log("Homeです")

  return (
    <>
      {openNew && <NewPost closed={setOpenNew} />}
      {openExercise && <EditExercise closed={setOpenExercise} />}
      {openProfile && <EditProfile closed={setOpenProfile} />}
      <h1>今日も楽しもう！</h1>
      <h2>{user.name}でログイン中...</h2>
      <button onClick={() => { setOpenNew(true) }}>new post</button>
      <button onClick={() => { setOpenExercise(true) }}>edit exercise</button>
      <button onClick={() => { setOpenProfile(true) }}>edit profile</button>
      <h2>today's post</h2>
      <Post />
    </>
  );
}

export default Home;
