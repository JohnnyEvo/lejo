import * as questionCss from './question.css';
import {ChangeEvent, useState} from "react";

const fetcher = (url: string, body: ChatRequest) => fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
}).then((res) => res.json())

const callChat = async (question: string) => {
    return await fetcher('/api/chat', {question});
}

const Question = () => {
    const [answer, setAnswer] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <>
        <input type="text" className={questionCss.question} onChange={handleChange}/>
        <button className={questionCss.submit} onClick={async () => {
            let data = await callChat(value);
            setAnswer(data.response);
        }}>
            Validez votre question
        </button>
        <div className={questionCss.answer}>
            {answer}
        </div>
    </>
}

export default Question;
