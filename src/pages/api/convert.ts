import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/OpenAI";

interface payload {
  inputLang: string;
  outputLang: string;
  inputCode: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { inputLang, outputLang, inputCode }: payload = req.body;

    // Send request to OpenAI API
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `The following code is in ${inputLang}: "${inputCode}". Convert this code in ${outputLang}.Note: If somehow you're unable to do so, just reply "Not possible!" without any justification.`,
        },
      ],
    });

    res.status(200).json({ outputCode: completion.data.choices[0].message });
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}

export default handler;
