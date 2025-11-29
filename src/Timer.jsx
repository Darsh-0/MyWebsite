import { useEffect, useRef } from "react";

export default function Timer({ currentSeconds, setCurrentSeconds, upperLimit, playing, onEnd }) {
    const intervalRef = useRef(null);
    const timeRef = useRef(currentSeconds);

    useEffect(() => {
        timeRef.current = currentSeconds;
    }, [currentSeconds]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        clearInterval(intervalRef.current);

        if (!playing) return;

        intervalRef.current = setInterval(() => {
            let next = +(timeRef.current + 0.1).toFixed(1);

            if (next >= upperLimit) {
                onEnd?.();
                next = 0;
            }

            timeRef.current = next;
            setCurrentSeconds(next);
        }, 100);

        return () => clearInterval(intervalRef.current);
    }, [playing, upperLimit, onEnd, setCurrentSeconds]);

    return null;
}
