import React from 'react'
import { Avatar, IconButton } from '@mui/material/';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
} from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Post.css"

import { PostProps } from "../interface"

import db from "../../fireabase"
import { doc, deleteDoc } from "firebase/firestore";

function Post({ id, displayName, userName, verified, text, avatar }: PostProps) {
  const DeletePostData = () => {
    deleteDoc(doc(db, "posts", id));
  }

  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src={avatar}></Avatar>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>{displayName}
              <span className='post__headerSpecial'>
                {verified ? <VerifiedIcon className='post__badge'></VerifiedIcon> : null}
                @{userName}
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <div className='post__footer'>
          <IconButton disabled>
            <ChatBubbleOutline fontSize="small" />
          </IconButton >
          <IconButton disabled>
            <Repeat fontSize="small" />
          </IconButton>
          <IconButton disabled>
            <FavoriteBorder fontSize="small" />
          </IconButton>
          <IconButton onClick={DeletePostData}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Post