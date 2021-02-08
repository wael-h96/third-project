import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

function Chat() {

    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed', input)
        setInput('');
    }
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last Seen...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reaciver"}`}>
                    <span className="chat__name">wael haddad</span>
                hey guys
                </p>
            </div>

            <div className="chat__footer">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="type a message..." />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
