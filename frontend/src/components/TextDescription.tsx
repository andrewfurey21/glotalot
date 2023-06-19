
export interface TextDescription {
    title: string,
    text: string,
    completion_perc: number,
    words: number
}

export function TextDescriptionCard(desc: TextDescription) {
    return (
        <div className="textDescriptionCard">
            <h2 className="title">{desc.title}</h2>
            <h2 className="completionPerc">Read: {desc.completion_perc}</h2>
            <h2 className="words">Words: {desc.words}</h2>
        </div>
    )
}
