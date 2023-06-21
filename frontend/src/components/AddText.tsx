import { useState } from 'react'

import "../styles/main.scss";
import axios from 'axios'

export function AddTextUI() {

    let [titleValue, setTitleValue] = useState("");
    let [textValue, setTextValue] = useState("");

    let input =
        <input placeholder="Title" value={titleValue} className="titleInput" onChange={e => setTitleValue(e.target.value)}></input>;
    let textArea =
        <textarea className="textArea" value={textValue} onChange={e => setTextValue(e.target.value)}></textarea>;

    const upload = () => {
        if (titleValue !== "" && textValue !== "") {
            let data = {
                title: titleValue,
                text: textValue,
            };
            setTitleValue("");
            setTextValue("");

            axios.post("http://localhost:8000/upload", data);
        }
    }

    return (
        <div className="addText">
            <div className="addTextButton" onClick={upload}>
                Add Text
            </div>
            {input}
            {textArea}
        </div>
    );
}
