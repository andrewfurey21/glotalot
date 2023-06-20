import React from 'react'
import axios from 'axios'

import { NoTexts } from "./NoTexts";
import { TextHeader } from './TextHeader';
import { TextDescription, TextDescriptionCard } from "./TextDescription";


export function TextsPage() {
    let [textDescriptions, setTextDescriptions] = React.useState<TextDescription[]>([]);

    let [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            let textInfo = await axios.get('/texts').then(() => setLoaded(true));
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
