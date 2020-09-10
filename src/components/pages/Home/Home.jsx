import React, { useState, useEffect, useContext } from 'react';
import StyledComponent from "./Home.styled"

import NewPost from "../Modal/NewPost"
import EditExercise from "../Modal/EditExercise"
import EditProfile from "../Modal/EditProfile"
import Post from "../../Post"
import PostView from "../../orgnisms/PostView"
import { AuthContext } from "../../Layout"

import CreateIcon from '@material-ui/icons/Create';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PersonIcon from '@material-ui/icons/Person';

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
    <StyledComponent>
      {openNew && <NewPost closed={setOpenNew} />}
      {openExercise && <EditExercise closed={setOpenExercise} />}
      {openProfile && <EditProfile closed={setOpenProfile} />}
      <h1>今日も楽しい選択をしよう！</h1>
      <p>{user.name}でログイン中...</p>
      {/* <p>投稿数：</p>
      <p>NICE：</p> */}
      <div className="user-menu">
        <button onClick={() => { setOpenNew(true) }}>
          <CreateIcon />
        </button>
        <button onClick={() => { setOpenExercise(true) }}>
          <DirectionsRunIcon />
        </button>
        <button onClick={() => { setOpenProfile(true) }}>
          <PersonIcon />
        </button >
      </div>
      <h2>Today's post</h2>
      {/* <Post /> */}
      <PostView />
    </StyledComponent >
  );
}

export default Home;
