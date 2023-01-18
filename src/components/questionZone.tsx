import * as questionZoneCss from './questionZone.css';
import Question from "./question";

const QuestionZone = () => {
    return <>
        <p className={questionZoneCss.question}>
            Que voulez-vous savoir ?
        </p>
        <Question />
    </>
}

export default QuestionZone;
