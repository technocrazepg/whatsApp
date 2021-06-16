import React from 'react'
import ChatListContacts from './ChatListContacts.js'

function ChatList() {
    return (
        <div className = "ChatList">
            <ul>
                {ChatListContacts.map(
                    (contact,index) => 
                        <div>
                            <li>
                                <img src = {contact.dp} alt = "Contact Display Pic"/>
                                <span className = "contactName">{contact.name}</span>
                                <span className = "contactTime">time</span>
                                <br></br>
                                {contact.msg}
                            </li>
                        </div>
                )}
            </ul>
        </div>
    )
}

export default ChatList
