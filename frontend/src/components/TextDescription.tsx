import { Link } from 'react-router-dom';

export interface TextDescription {
    title: string,
    completion_perc: number,
    words: number,
    id: string,
}

export function TextDescriptionCard(desc: TextDescription) {
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
