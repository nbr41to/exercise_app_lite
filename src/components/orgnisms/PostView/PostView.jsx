import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../Layout"
import firebase from "../../../firebase"
import Post from "../../molecules/Post"
import StylePostView from "./PostView.styled"


const PostView = () => {
    const [user, setUser] = useContext(AuthContext)
    const [users, setUsers] = useState()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        firebase.firestore().collection("user")
            .onSnapshot((snapshot) => {
                let getUsers = snapshot.docs.map((doc) => {
                    return doc.data();
                });
                setUsers(getUsers)
            });

        firebase.firestore().collection("posts")
            .onSnapshot((snapshot) => {
                let getPosts = snapshot.docs.map((doc) => {
                    const getPost = doc.data();
                    getPost.post_id = doc.id
                    return getPost
                });
                setPosts(getPosts)
            });
    }, [])



    console.log(users)
    console.log(posts)
    return (
        <div>
            {
                posts.sort((a, b) => {
                    if (a.time > b.time) return -1;
                    if (a.time < b.time) return 1;
                    return 0;
                }).map((post, index) => < Post users={users} post={post} index={index} />)
            }
        </div>
    );
}

export default PostView;


