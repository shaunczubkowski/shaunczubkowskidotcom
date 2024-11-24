import { useEffect, useState } from "react";
import { intervalForEach } from "../utils/intervalForEach";

export const useQualities = () => {
    const qualities = [
        "I write clean, easy-to-read code",
        "I focus on smooth user experiences",
        "I build for speed and efficiency",
        "I love solving problems creatively",
        "I keep things simple and intuitive",
        "I’m always learning new tools",
        "I make sure things work everywhere",
        "I write code that’s easy to maintain",
        "I care about making things accessible",
        "I test my code to avoid surprises",
        "I design with users in mind",
        "I refactor to keep code clean",
        "I build quality software",
        "I keep code flexible for future changes",
        "I embrace feedback to improve my work",
        "I keep the codebase easy to navigate",
        "I’m always up for a new challenge"
    ];

    const [currentQuality, setCurrentQuality] = useState(qualities[0]);

    useEffect(() => {
        const interval = intervalForEach(qualities, setCurrentQuality, 2000, true);

        return () => {
            clearInterval(interval)
        }
    }, []);

    return currentQuality

}