import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat(addNewChat) {

    const [seed, setSeed] = useState("")

    const createChat = () => {
        const roomName = prompt("Please enter a room name")

        if (roomName) {

        }
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random) * 5000);
    }, []);

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>

        </div>
    ) : (
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add new chat</h2>
            </div>
        )
}

export default SidebarChat;
