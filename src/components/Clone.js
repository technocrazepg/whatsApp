import React ,{useState} from 'react'
import Header from './Header'
import LeftArea from './LeftArea'
import ChatArea from './ChatArea'
function Clone() {
    const [isClickedForNewChat,setClickForNewChat] = useState(false);
    const [isClickedForProfile,setClickForProfile] = useState(false);
    return (
        <div className = "clone">
            <Header  
            isClickedForNewChat = {isClickedForNewChat} 
            setClickForNewChat = {setClickForNewChat} 
            isClickedForProfile = {isClickedForProfile}
            setClickForProfile = {setClickForProfile}
            />
            <ChatArea />
            <LeftArea isClickedForNewChat = {isClickedForNewChat} isClickedForProfile = {isClickedForProfile}/>
        </div>
    )
}

export default Clone
