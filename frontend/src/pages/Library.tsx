
import "../styles/main.scss";
import React from 'react'
import axios from 'axios'

import { AddTextUI } from "../components/AddText";
import { Link } from 'react-router-dom';

interface TextDescription {
    title: string,
    completion_perc: number,
    words: number,
    id: string,
}

function TextDescriptionCard(desc: TextDescription) {
    return (
        <div className="textDescriptionCard">
            <Link to={"read/"+desc.id}>
                <h2 className="title">{desc.title}</h2>
                <h2 className="completionPerc">Read: {desc.completion_perc}%</h2>
                <h2 className="words">Words: {desc.words}</h2>
            </Link>
        </div>
    )
}

export function Library() {
    let [textDescriptions, setTextDescriptions] = React.useState<TextDescription[]>([]);
    React.useEffect(() => {
        (async () => {
            let textInfo = await axios.get('http://localhost:8000/texts');
            setTextDescriptions(textInfo.data);
        })();
    }, []);

    return (
        <div className="textsPage">
            <div className="textHeader">
                <div className="textHeaderTitle">
                    Texts
                </div>
                <AddTextUI/>
            </div>
            {textDescriptions.length === 0 ? (
                <div className="noTexts">
                    <p>You haven't uploaded any texts yet.</p>
                </div>
            ) : (
                <div className="textDescriptionCards">
                    {textDescriptions.map((desc: TextDescription, index: number) => {
                        return <div key={index}>
                            {TextDescriptionCard(desc)}
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}
