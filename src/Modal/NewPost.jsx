import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../components/Layout"
import firebase from "../firebase"

function NewPost(props) {
  const [user, setUser] = useContext(AuthContext);
  const [myExercise, setMyExercise] = useState([])
  const [comment, setComment] = useState("")
  const [postExercises, setPostExercises] = useState([])

  useEffect(() => {
    let getExercises = []
    // ユーザのエクササイズを取得
    const docRef = firebase.firestore().collection("user").doc(user.id)
    docRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data()
        console.log("Document data:", data.exercises);
        getExercises = data.exercises
      } else {
        console.log("No such document!");
        // ユーザのDocがなかった場合新規作成する
        firebase.firestore().collection("user").doc(user.id).set({
          exercises: [],
        })
          .then(() => {
            console.log("create new doc");
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      }
      setMyExercise(getExercises)
    }).catch(function (error) {
      console.log("Error getting document:", error);
    })
  }, [])

  const exerciseSelect = (index) => {
    // const key = index
    setPostExercises([
      ...postExercises,
      myExercise[index]
    ]
    )
  }


  const onSubmit = () => {
    const d = new Date(); // Today
    const DateTimeFormat = 'YYYY/MM/DD hh:mi:ss'; // "2019/10/04 12:34:56" 
    let nowTime = DateTimeFormat
      .replace(/YYYY/g, String(d.getFullYear()))
      .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
      .replace(/DD/g, ('0' + d.getDate()).slice(-2))
      .replace(/hh/g, ('0' + d.getHours()).slice(-2))
      .replace(/mi/g, ('0' + d.getMinutes()).slice(-2))
      .replace(/ss/g, ('0' + d.getSeconds()).slice(-2));
    firebase.firestore().collection("posts").add(
      {
        user_id: user.id,
        time: nowTime,
        exercises: postExercises,
        comment: comment,
        nice: [],
      }
    )
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("新しい投稿が完了しました！")
        props.closed(false)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>new post</h1>
      <p>下から投稿するエクササイズを追加してください！</p>
      <ul>
        {postExercises.map((menu, index) => <li key={index}>{menu}</li>)}
      </ul>
      <p>達成感や感想など！</p>
      <input type="text" placeholder="real ecstacy" onChange={(e) => setComment(e.target.value)} />
      <button onClick={onSubmit}>投稿</button >
      <hr />
      <h2>my exercise</h2>
      <ul>
        {myExercise.map((menu, index) =>
          <li key={index}>{menu}<button onClick={() => { exerciseSelect(index) }}>＋</button></li>
        )}
      </ul>
    </div >
  );
}

export default NewPost;
