import React from 'react'
import axios from 'axios'

import { NoTexts } from "./NoTexts";
import { TextHeader } from './TextHeader';
import { TextDescription, TextDescriptionCard } from "./TextDescription";


export function TextsPage() {
    let [textDescriptions, setTextDescriptions] = React.useState<TextDescription[]>([]);
    React.useEffect(() => {
        (async () => {
            let textInfo = await axios.get('http://localhost:8000/texts');
            setTextDescriptions(textInfo.data);
        })();
    }, []);

    if (textDescriptions.length === 0) {
        return (
            <div className="textsPage">
                <TextHeader/>
                <NoTexts/>
            </div>
        );
    } else {
        return (
            <div className="textsPage">
                <TextHeader/>
                <div className="textDescriptionCards">
                    {textDescriptions.map((desc: TextDescription, index: number) => {
                        return <div key={index}>
                            {TextDescriptionCard(desc)}
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
