import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Button } from "@mui/material";

import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twittericon' />

      <SidebarOption text="ホーム" Icon={<HomeIcon />} active></SidebarOption>
      <SidebarOption text="話題を検索" Icon={<SearchIcon />}></SidebarOption>
      <SidebarOption text="通知" Icon={<MailOutlineIcon />}></SidebarOption>
      <SidebarOption text="メッセージ" Icon={<NotificationsNoneIcon />}></SidebarOption>
      <SidebarOption text="ブックマーク" Icon={<BookmarkBorderIcon />}></SidebarOption>
      <SidebarOption text="リスト" Icon={<ListAltIcon />}></SidebarOption>
      <SidebarOption text="プロフィール" Icon={<PermIdentityIcon />}></SidebarOption>
      <SidebarOption text="もっと見る" Icon={<MoreHorizIcon />}></SidebarOption>

      <Button variant="outlined" className='sidebar__tweet' fullWidth>ツイートする</Button>
    </div>
  )
}

export default Sidebar