import React from 'react';
import NewChatList from './NewChatList.js';
import ChatList from './ChatList.js';
import Profile from './Profile';
function LeftArea(props) {
    function show(){
        if(props.isClickedForNewChat)
            return <NewChatList />
        else if(props.isClickedForProfile)
            return <Profile />
        else
            return <ChatList />
    }
    return (
        <div>
            {show()}
        </div>
    )
}

export default LeftArea
