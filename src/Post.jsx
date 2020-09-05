import React, { useContext, useEffect } from 'react';
import { Context } from "./Context"
import firebase from "./firebase"


function Post() {
    const { users, posts, setPosts } = useContext(Context)
    console.log(posts)
    useEffect(() => {
        firebase.firestore().collection("posts").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                console.log(`${doc.id} => ${doc.data()}`);
                console.log(data.comment);
            });
        });

    })
    return (
        <div>
            {posts.sort((a, b) => {
                if (a.time > b.time) return -1;
                if (a.time < b.time) return 1;
                return 0;
                // 並び替えはここが最適か？（ContextではタイミングがBADだった）
            }).map((post, index) => {
                return (
                    <div key={index} style={{ display: "flex", alignItems: "center", border: "1px solid #444", padding: 10, margin: 10 }}>
                        <div>
                            <img src={users[post.user].photo_url} style={{ width: "100px", height: "100px", borderRadius: "100%" }} />
                            <p style={{ textAlign: "center" }}>{users[post.user].name}</p>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <ul>
                                {post.exercise.map((menu, index) => {
                                    return <li key={index}>{menu}</li>
                                })}
                            </ul>
                            <p>{post.comment}</p>
                            <p>{post.time}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Post;
