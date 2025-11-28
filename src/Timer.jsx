import { useEffect } from "react";

export default function Timer({ currentSeconds, setCurrentSeconds, upperLimit, playing}) {
    useEffect(() => {
        if (!playing) {
            return;
        }
        const interval = setInterval(() => {
            setCurrentSeconds(prev => {
                if (prev >= upperLimit) {
                    return 0;
                }
                return prev + 0.1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [playing, setCurrentSeconds, upperLimit]);

    return null;
}
