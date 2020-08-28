import React, { useState, useEffect } from 'react';
import user1 from "./images/user1.jpg"
import user2 from "./images/user2.jpg"
import user3 from "./images/user3.jpg"
import user4 from "./images/user4.jpg"

export const Context = React.createContext([])

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    /**
     * ユーザー情報管理
     */
    const [users, setUsers] = useState({
        id111: {
            name: "marry",
            photo_url: user1,
            exercise: [
                "腕立て30回",
                "腹筋500回",
                "背筋30回",
            ],
        },
        id112: {
            name: "Kelly",
            photo_url: user2,
            exercise: [
                "ジョギング2km",
                "懸垂20回",
                "ストレッチ10分",
            ],
        },
        id113: {
            name: "Susan",
            photo_url: user3,
            exercise: [
                "バーピージャンプ100回",
                "反復横跳び100回",
            ],
        },
        id114: {
            name: "Naomi",
            photo_url: user4,
            exercise: [
                "腕立て",
                "腹筋",
                "背筋",
                "筋肉",
                "鉄アレイLOVE",
            ],
        },
    });
    /**
     * 投稿管理用
     */
    const [posts, setPosts] = useState([
        {
            user: "id114",
            time: "2020/8/26,11:12:12",
            exercise: [
                "腕立て30回",
                "腹筋500回",
                "背筋30回",
            ],
            comment: "腹筋は裏切らない"
        },
        {
            user: "id112",
            time: "2020/8/18,21:59:51",
            exercise: [
                "ジョギング5km",
                "懸垂20回",
                "ストレッチ10分",
            ],
            comment: "楽しくなってきてたくさん走った！",
        },
        {
            user: "id111",
            time: "2020/8/22,9:32:53",
            exercise: [
                "バーピージャンプ100回",
                "反復横跳び100回",
            ],
            comment: "今日もはじけるぜ",
        },
        {
            user: "id114",
            time: "2020/8/11,20:20:32",
            exercise: [
                "腕立て",
                "腹筋",
                "背筋",
                "筋肉",
                "鉄アレイLOVE",
            ],
            comment: "筋肉は裏切らない",
        },
    ]);

    // postsを並び替える（遅い
    // useEffect(() => {
    //     posts.sort((a, b) => {
    //         if (a.time > b.time) return -1;
    //         if (a.time < b.time) return 1;
    //         return 0;
    //     })
    //     setPosts(posts)
    //     console.log("POSTSを最新の投稿が上になるように,並び替えましたcontextjs")
    // }, [])

    return (
        <Context.Provider value={{
            currentUser: currentUser,
            setCurrentUser: setCurrentUser,
            users: users,
            setUsers: setUsers,
            posts: posts,
            setPosts: setPosts,
        }}>
            {children}
        </Context.Provider>
    )
}