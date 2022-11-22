import { useEffect, useState } from "react";

type Props = {
  active: boolean;
};
const Timer: React.FC<Props> = ({ active = true }) => {
  const [counter, setCounter] = useState(0);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const subscription = setInterval(() => {
      if (active) {
        const secCounter = counter % 60;
        const minCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secCounter).length === 1 ? `0${secCounter}` : `${secCounter}`;
        const computedMinute =
          String(minCounter).length === 1 ? `0${minCounter}` : `${minCounter}`;

        setSeconds(computedSecond);
        setMinutes(computedMinute);

        setCounter((counter) => counter + 1);
      }
    }, 1000);
    return () => clearInterval(subscription);
  }, [counter, active]);

  return (
    <div style={{ display: "flex" }}>
      <p>{minutes}</p>
      <p>:</p>
      <p>{seconds}</p>
    </div>
  );
};

export default Timer;
