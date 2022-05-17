import {useEffect, useState} from "react";


export const useTimer = (month?: number, day?: number, year?: number) => {
    const calculateTimeLeft = () => {
        let difference = +new Date(`${month}/${day}/${year}`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });


    return [timeLeft]
}