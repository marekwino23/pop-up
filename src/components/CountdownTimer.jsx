import cogoToast from "cogo-toast";
import {useCallback, useEffect, useRef, useState} from "react";

const CountdownTimer = () => {
    const [, setSeconds] = useState();
    const hoursRef = useRef(72);
    const minutesRef = useRef(0);
    const secondsRef = useRef(0);
    const startTimer = useCallback(() => {
        if(!secondsRef.current && !minutesRef.current && !hoursRef.current) {
            cogoToast.success("Time complete")
            return;
        }
        if(secondsRef.current === 0 && minutesRef.current === 0) {
            hoursRef.current -= 1;
            minutesRef.current = 59;
            secondsRef.current = 59;
        }
        else if (secondsRef.current !== 0) {
            secondsRef.current -= 1;
        } else {
            minutesRef.current -= 1;
            secondsRef.current = 59;
        }
        setSeconds(secondsRef.current);
    }, [ ]);
    useEffect(() => {
        const intervalId = setInterval(startTimer, 1000);
        return() => clearTimeout(intervalId)
    },[startTimer]);
    return(
    <div className="countdown-timer">
        <div className="count-outer">
            <div className="count-inner">
                {`${hoursRef.current}`.padStart(2,0).split('').map((item, index) => <div key={index} className="unit hour--unit">{item}</div>)}
            </div>
            <span className="unit--desc">Godziny</span>
        </div>
        <div className="count">
            <div className="count-outer">
                <div className="count-inner">
                    {`${minutesRef.current}`.padStart(2,0).split('').map((item, index) => <div key={index} className="unit minute--unit">{item}</div>)}
                </div>
                <span className="unit--desc">Minuty</span>
            </div>
        </div>
        <div className="count">
            <div className="count-outer">
                <div className="count-inner">
                    {`${secondsRef.current}`.padStart(2,0).split('').map((item, index) => <div key={index} className="unit second--unit">{item}</div>)}
                </div>
                <span className="unit--desc">Sekundy</span>
            </div>
        </div>
    </div>
    )
}
export default CountdownTimer;