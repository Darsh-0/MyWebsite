import { useEffect } from "react";

export default function Timer({ currentSeconds, setCurrentSeconds, upperLimit }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSeconds(prev => {
                if (prev >= upperLimit) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [setCurrentSeconds, upperLimit]);

    return null;
}
