import {NextApiRequest, NextApiResponse} from "next";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const body : ChatRequest = req.body

    let answer = '';
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: body.question,
            max_tokens: 64,
        });
        answer = completion.data.choices[0].text;
    } catch(error) {
        answer = "Je ne peux pas répondre à cette question."
    }

    res.status(200).json(<ChatResponse>{response: answer})
}

export default handler;
