import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../Context"

function EditProfile(props) {
  const { currentUser, users, setUsers } = useContext(Context);
  const changed_users = { ...users }
  const photoChange = (e) => {
    changed_users[currentUser].photo_url = e.target.files[0]
    console.log(e.target.files[0])
    console.log(changed_users[currentUser].photo_url)

  }
  const nameChange = (e) => {
    changed_users[currentUser].name = e.target.value
    console.log(users[currentUser].name)
  }

  console.log(users[currentUser].name)
  const done = () => {
    // console.log(users[currentUser].name)
    // console.log(changed_users[currentUser].name)
    // if (!changed_users[currentUser].name === users[currentUser].name) {
    setUsers(changed_users)
    props.closed(false)
    // } else {
    //   alert("変更する名前を入力してください！")
    // }
    /**
     * バリデーションをしたいけど,usersがonChangeですでに書き換わっている謎の問題発生
     */
  }

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>my profile</h1>
      <p>your photo</p>
      <p>※画像は現在変更できません！</p>
      <img src={users[currentUser].photo_url} style={{ width: '200px', height: '200px', borderRadius: '100%' }} />
      <input type="file" accept="image/*" onChange={photoChange} />
      <br />
      <p>your name: {users[currentUser].name}</p>
      <input type="text" placeholder={users[currentUser].name} onChange={nameChange} />
      <hr />
      <button onClick={done}>変更を適応する</button>
    </div >
  );
}

export default EditProfile;
