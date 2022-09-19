import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTweetEmbed, TwitterTimelineEmbed, } from 'react-twitter-embed';

import "./Widgets.css"
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widget__search'></Search>
        <input placeholder='キーワード検索' type="text"></input>
      </div>
      <div className='widget__widgetContainer'>
        <h2>今どうしてる？</h2>
        {/* <TwitterTweetEmbed tweetId={'1534866885581234179'} /> */}

        <TwitterTimelineEmbed sourceType='profile' screenName='hikakin' options={{ height: 500 }}></TwitterTimelineEmbed>

      </div>
    </div>
  )
}

export default Widgets