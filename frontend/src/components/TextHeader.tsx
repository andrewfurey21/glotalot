import "../styles/main.scss";
import axios from 'axios'

export function TextHeader() {
    return (
        <div className="textHeader">
            <div className="textHeaderTitle">
                Texts
            </div>
            <div className="addTextButton" onClick={() => addTexts()}>
                Add Text
            </div>
        </div>
    );
}

function addTexts(): void {
    axios.post('/upload/', {
        title: 'Some testing title',
        text: 'HEre is some text about an italian story something something something'
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}
