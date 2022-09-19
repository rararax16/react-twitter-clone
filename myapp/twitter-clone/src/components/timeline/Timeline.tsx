import React, { useEffect, useState } from 'react'
import Post from './Post'

import './Timeline.css'
import TweetBox from './TweetBox'

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from "../../fireabase";

import { PostProps } from "../interface"

// type Posts = {
//   id: string,
//   displayName: string;
//   userName: string;
//   verified: boolean;
//   text: string;
//   avatar: string;
//   image: string;
// }

function Timeline() {

  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      const postData = await collection(db, "posts");
      const q = query(postData, orderBy("timeStamp", "desc"));

      onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map(doc => {
          let result = doc.data() as PostProps
          result.id = doc.id
          // console.log(result)
          return result
        }))
      })
    })()
  }, [])

  return (
    <div className='timeline'>
      <div className='timeline__header'>
        <h2>トゥイッター風</h2>
      </div>

      <TweetBox></TweetBox>

      {posts.map((post) => {
        return <Post id={post.id} key={post.id} displayName={post.displayName} userName={post.userName} verified={post.verified} text={post.text} avatar={post.avatar}></Post>
      })}


    </div>
  )
}

export default Timeline