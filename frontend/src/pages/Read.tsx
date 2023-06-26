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

interface Translation {
    word: string,
    translation: string
}

function TranslationCard(word: string, translation: string, index: number) {
    return (
        <div className="translationCard" key={index}>
            <h3 className="word">{word}</h3>
            <h3 className="translation">{translation}</h3>
        </div>
    )
}

export function Read() {
    let { id } = useParams();
    let [text, setText] = useState<Text>({title: '', text: '', words: 0, completion_perc: 0, id: ''});
    let [translations, setTranslations] = useState<Translation[]>([])

    useEffect(() => {
        (async () => {
            let textInfo = await axios.get('http://localhost:8000/read/?id='+id);
            setText(textInfo.data);
        })();
    }, [id]);

    return (
        <div className="readDisplay">
            <div className="textDisplay">
                <h1 className="title">{text.title}</h1>
                <div className="text">{
                    text.text.split(" ").map((word, index) => {
                        return (
                            <span key={index} className="textButton" onClick={async () => {

                                let text = await axios.get('http://localhost:8000/add_word/?text='+word);
                                setTranslations([...translations, {word: word, translation: text.data}])
                            }}>
                                {word + " "}
                            </span>
                        )
                    })
                }</div>
            </div>
            <div className="wordBank">
                {
                    translations.map((translation, index) => {
                        return (
                            TranslationCard(translation.word, translation.translation, index)
                        )
                    })
                }
            </div>
        </div>
    );
}
