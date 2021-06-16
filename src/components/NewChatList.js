import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import contacts from './Contacts'
function NewChatList() {
    const sortedContacts = contacts;
    sortedContacts.sort((a,b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
        if(fa > fb)
            return 1;
        if(fa < fb)
            return -1;
        return 0;
    });
    return (
        <div className = "NewChatList ChatList">
            <div className = "searchBox">
            <SearchIcon className = "searchIcon"/><input placeholder = "Search or start new chat"></input>
            </div>
            <div className = "">
                <ul>
                    {sortedContacts.map(
                        (contact,index) =>
                        <div>
                            <li>
                                <img src = {contact.dp} alt = "Contact Display pic"/>
                                <span className = "contactName">{contact.name}</span>
                                <span className = "contactTime">time</span>
                                <br></br>
                                {contact.about}
                            </li>
                        </div> 
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NewChatList
