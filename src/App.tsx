import React, { useState, useEffect } from 'react';
import TopView from "./TopView"
import EditExercise from "./Modal/EditExercise"
import NewPost from "./Modal/NewPost"
import EditProfile from "./Modal/EditProfile"
import Post from "./Post"
import Layout from "./Layout"
import { ContextProvider } from "./Context"


function App() {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <ContextProvider >
      <Layout>
        {openNew && <NewPost closed={setOpenNew} />}
        {openExercise && <EditExercise closed={setOpenExercise} />}
        {openProfile && <EditProfile closed={setOpenProfile} />}
        <TopView />
        <button onClick={() => { setOpenNew(true) }}>new post</button>
        <button onClick={() => { setOpenExercise(true) }}>edit exercise</button>
        <button onClick={() => { setOpenProfile(true) }}>edit profile</button>
        <h2>today's post</h2>
        <Post />
      </Layout>
    </ContextProvider>
  );
}

export default App;
