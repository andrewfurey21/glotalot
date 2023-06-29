import "../styles/main.scss"
import { useState } from 'react'
import axios from 'axios'

function ChatCard(text: string, index: number) {
    return (
        <div className="chatBotTextCard" key={index}>
            <p className="chatBotText">{text}</p>
        </div>
    )
}

export function Chat() {

    let [question, setQuestion] = useState<string>("");
    let [chats, setChats] = useState<string[]>([]);

    const sendChat = async () => {
        if (question !== "") {
            let chatInfo = await axios.get("http://localhost:8000/chat/?question="+question);
            console.log(chatInfo.data)
            setChats([...chats, chatInfo.data])
        }
    }

    return (
        <div className="chat">
            <div className="chatInput">
                <input placeholder="" value={question} className="chatInput" onChange={e => setQuestion(e.target.value)}/>
                <button onClick={sendChat} className="sendChat">Send</button>
            </div>
            <div className="chats">
                {
                    chats.map((text, index) => {
                        return (
                            ChatCard(text, index)
                        )
                    })
                }
            </div>

        </div>
    )
}
