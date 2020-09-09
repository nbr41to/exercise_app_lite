import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "./components/Layout"
import firebase from "./firebase"


function Post() {
    const [user, setUser] = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    console.log(posts)
    useEffect(() => {
        firebase.firestore().collection("posts")
            .onSnapshot((snapshot) => {
                let getPosts = snapshot.docs.map((doc) => {
                    const getPost = doc.data();
                    getPost.post_id = doc.id
                    return getPost
                });
                console.log(getPosts)
                setPosts(getPosts)
            });
    }, [])

    const niceToggle = (id) => {
        const niceRef = firebase.firestore().collection("posts").doc(id)
        niceRef.get().then((doc) => {
            const data = doc.data()
            if (!data.nice.includes(user.uid)) {
                niceRef.update({
                    nice: firebase.firestore.FieldValue.arrayUnion(user.uid)
                })
            } else {
                niceRef.update({
                    nice: firebase.firestore.FieldValue.arrayRemove(user.uid)
                })
            }
        })
            .catch((error) => alert(error))
    }

    const postDalete = (id) => {
        if (window.confirm("投稿を削除しますか？")) {
            firebase.firestore().collection("posts").doc(id).delete()
                .then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    alert(error);
                });
        }
    }

    console.log(posts)
    return (
        <div>
            {posts.sort((a, b) => {
                if (a.time > b.time) return -1;
                if (a.time < b.time) return 1;
                return 0;
            }).map((post, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center", border: "1px solid #444", padding: 10, margin: 10 }}>
                        <div>
                            {/* <img src={users[post.user].photo_url} style={{ width: "100px", height: "100px", borderRadius: "100%" }} /> */}
                            <p style={{ textAlign: "center" }}>{post.user_name}</p>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <ul>
                                {post.exercises.map((menu, index) => {
                                    return <li key={index}>{menu}</li>
                                })}
                            </ul>
                            <p>{post.comment}</p>
                            <button onClick={() => niceToggle(post.post_id)}>👍 {post.nice.length}</button>
                            {(post.nice.includes(user.uid)) && <p>👍しました</p>}
                            <p>{post.time}</p>
                            {(post.user_id === user.uid) && <button onClick={() => postDalete(post.post_id)}>削除</button>}
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Post;
