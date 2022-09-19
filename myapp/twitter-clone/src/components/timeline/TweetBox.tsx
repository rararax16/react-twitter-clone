import React, { useEffect, useState } from 'react'
import { Avatar, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material/';
import "./TweetBox.css";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../fireabase";

function TweetBox() {
  const avatarData = [
    { label: "サル", value: "saru" },
    { label: "パンダ", value: "panda" },
    { label: "ウシ", value: "ushi" },
    { label: "ウマ", value: "uma" },
  ]
  const [tweetMessage, setTweetMessaaga] = useState("");
  const [value, setValue] = useState(avatarData[0].value);
  const [avatar, setAvatar] = useState(`./avatar/${avatarData[0].value}.png`);
  const [userName, setUserName] = useState(avatarData[0].label);

  useEffect(() => {
    console.log("chenge useeffect")
  }, [avatar])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value

    const findAvatarData = avatarData.find(data => data.value === value);
    console.log(event.target)
    setValue(value);
    setAvatar(`./avatar/${value}.png`);
    setUserName(findAvatarData?.label as string);
  };
  const sendTweet = (e: any) => {
    e.preventDefault();
    if (tweetMessage === "") return;

    addDoc(collection(db, "posts"), {
      displayName: userName,
      userName: value,
      verified: true,
      text: tweetMessage,
      avatar: avatar,
      timeStamp: serverTimestamp(),
    });

    setTweetMessaaga("");
  }

  return (
    <div className='tweetBox'>
      <FormControl className='tweetBox__avatar'>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {avatarData.map(data => <FormControlLabel value={data.value} control={<Radio />} label={data.label} />)}

        </RadioGroup>
      </FormControl>
      <div className='tweetBox__input'>
        <Avatar src={avatar}></Avatar>
        <input value={tweetMessage} placeholder='いまどうしてる？' type="text" onChange={(e) => setTweetMessaaga(e.target.value)}></input>
      </div>
      <Button className='tweetBox__tweetButton' type='submit' onClick={sendTweet}>ツイートする</Button>
    </div>
  )
}

export default TweetBox