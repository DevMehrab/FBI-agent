import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/context";
import { GoogleGenAI } from "@google/genai";

export default function useApi() {
    const { history, setHistory, setIsLoading } = useContext(ChatContext);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    });

    async function callApi(prompt) {
        try {
            setLoading(true);
            setIsLoading(true);
            const chat = ai.chats.create({
                model: "gemini-2.5-flash",
                history: history,
                config: {
                    systemInstruction:
                        "You are a highly trained FBI agent.Your name is Jack R. Bennett, Age: 42. Respond with professionalism, authority, and brevity. Use clear, direct language. No casual tone, no jokes. Always maintain the demeanor of a federal officer.",
                },
            });

            const response = await chat.sendMessage({
                message: prompt,
            });

            setData(response.text);
            setHistory((prev) => [
                ...prev,
                { role: "model", parts: [{ text: response.text }] },
            ]);
        } catch (error) {
            setData("Connection disrupted...");
            setHistory((prev) => [
                ...prev,
                { role: "model", parts: [{ text: "Connection disrupted..." }] },
            ]);
        } finally {
            setLoading(false);
            setIsLoading(false);
        }
    }
    return { data, loading, error, callApi };
}
