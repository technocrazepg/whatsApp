import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChatHeader(props) {
    function goBack(){
        props.setClickForNewChat(false);
    }
    return (
        <div className = "NewChatHeader">
            <button onClick = {goBack}><ArrowBackIcon fontSize = "small"/></button>
            <h4>New Chat</h4>
        </div>
    
    )
}

export default NewChatHeader
