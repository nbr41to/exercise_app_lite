import React, { useState, useContext } from 'react';
import { Context } from "../Context"

function NewPost(props) {
  const { currentUser, users, posts, setPosts } = useContext(Context);
  const [newpost, setNewpost] = useState({
    user: currentUser,
    time: "",
    exercise: [],
    comment: "",
  })


  // 2桁にするやつ[未使用] NUM...出力する数字 LEN...桁数
  function zeroPadding(NUM, LEN) {
    return (Array(LEN).join('0') + NUM).slice(-LEN);
  }

  const exerciseSelect = (index) => {
    // const key = index
    setNewpost(
      {
        ...newpost,
        exercise: [
          ...newpost.exercise,
          users[currentUser].exercise[index]
        ]
      }
    )
  }

  const commentChange = (e) => {
    setNewpost(
      {
        ...newpost,
        comment: e.target.value,
      }
    )
  }

  const onSubmit = () => {
    const date = new Date()
    const nowTime = date.getFullYear() + "/" +
      (date.getMonth() + 1) + "/" +
      date.getDate() + "," +
      date.getHours() + ":" +
      date.getMinutes() + ":" +
      date.getSeconds()
    setPosts(
      [...posts,
      {
        user: currentUser,
        time: nowTime,
        exercise: newpost.exercise,
        comment: newpost.comment,
      }
      ]
    )
    props.closed(false)
  }
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>new post</h1>
      <p>下から投稿するエクササイズを追加してください！</p>
      <ul>
        {newpost.exercise.map((menu, index) => <li key={index}>{menu}</li>)}
      </ul>
      <p>達成感や感想など！</p>
      <input type="text" placeholder="real ecstacy" onChange={commentChange} />
      <button onClick={onSubmit}>投稿</button >
      <hr />
      <h2>my exercise</h2>
      <ul>
        {users[currentUser].exercise.map((menu, index) =>
          <li key={index}>{menu}<button onClick={() => { exerciseSelect(index) }}>＋</button></li>
        )}
      </ul>
    </div >
  );
}

export default NewPost;
