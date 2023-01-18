import * as questionZoneCss from './questionZone.css';
import Question from "./question";

const QuestionZone = () => {
    return <>
        <p className={questionZoneCss.question}>
            Qu'est-ce que tu veux ?
        </p>
        <Question />
    </>
}

export default QuestionZone;
