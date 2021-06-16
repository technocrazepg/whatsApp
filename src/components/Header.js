import React ,{useState} from 'react'
import profilePic from './images/dp.png'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NewChatHeader from './NewChatHeader.js';
function Header(props) {
    const [isClickedForSearch,setClickForSearch] = useState(false);
    const [isClickedForMenu,setClickForMenu] = useState(false);
    
    function showSearchIcon(){
        setClickForSearch(prevValue =>{
            return !prevValue;
        });
    }
    function chngIcon(){
        setClickForSearch(true);
    }
    function showMenu(){
        setClickForMenu(prevValue =>{
            return !prevValue;
        });
        var property = document.getElementById('menuBtn');
        !isClickedForMenu ?
        property.style.backgroundColor = "rgb(207, 207, 207)" :
        property.style.backgroundColor = "transparent"
    }
    function showNewChat(){
        props.setClickForNewChat(true);
    }
    function showProfile(){
        props.setClickForProfile(true);
    }
    return (
        <div>
            {!props.isClickedForNewChat ?
                (<div className = "Header">
                    <img src = {profilePic} onClick = {showProfile} alt = "Profile pic"></img>
                    <button onClick = {showMenu} id = "menuBtn"><MoreVertIcon fontSize="small"/></button> 
                    <button onClick = {showNewChat}><ChatIcon fontSize="small"/></button>
                    <button><DonutLargeRoundedIcon fontSize="small"/></button>
                    {
                        isClickedForMenu ?
                        (<div className = "menu">
                            <ul>
                                <li>New Group</li>
                                <li>Create Room</li>
                                <li>Profile</li>
                                <li>Archived</li>
                                <li>Starred</li>
                                <li>Settings</li>
                                <li>Log Out</li>
                            </ul>
                        </div> ) :
                        (null)
                    }
                    <div className = "searchBox">
                        {!isClickedForSearch ? <SearchIcon className = "searchIcon"/> : <ArrowBackIcon className = "backIcon" onClick = {showSearchIcon}/>}<input placeholder = "Search or start new chat" onClick = {chngIcon}></input>
                    </div>
                </div>) :
                <NewChatHeader setClickForNewChat = {props.setClickForNewChat}/>
            }
        </div>
    )
}

export default Header
