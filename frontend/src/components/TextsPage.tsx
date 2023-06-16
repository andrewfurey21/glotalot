
import { NoTexts } from "./NoTexts";
import { TextHeader } from './TextHeader';
import axios from 'axios'

export function TextsPage() {
    const getTextDescriptions = async() => {
        axios.get('/texts')
             .then(function (response) {
                 console.log(response);
             })
             .catch(function (error) {
                 console.log(error);
             })
      };

    getTextDescriptions();

    return (
        <div className="TextsPage">
            <TextHeader/>
            <NoTexts/>
        </div>
    )
}
