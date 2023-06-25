import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/main.scss";
import { useParams } from "react-router-dom";

interface Text {
    title: string,
    text: string,
    words: number,
    completion_perc: number,
    id: string,
}

async function getText(word: string) {
    console.log("word: " + word)
    let text = await axios.get('http://localhost:8000/translate?text='+word);
    console.log(text)
    return text;
}

export function Read() {
    let { id } = useParams();
    let [text, setText] = useState<Text>({title: '', text: '', words: 0, completion_perc: 0, id: ''});
    useEffect(() => {
        (async () => {
            let textInfo = await axios.get('http://localhost:8000/read?id='+id);
            setText(textInfo.data);
        })();
    }, [id]);

    return (
        <div className="textDisplay">
            <h1>Title: {text.title}</h1>
            <h3> Word count: {text.words}</h3>
            <p>{text.text}</p>
            <div>{
                text.text.split(" ").map((word, index) => {
                    return (<button key={index} className="textButton" onClick={() => getText(word)}>
                        {word}
                    </button>)
                })
            }</div>
        </div>
    );
}
