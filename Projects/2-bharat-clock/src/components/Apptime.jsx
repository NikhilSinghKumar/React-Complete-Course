import { useEffect, useState } from "react";

function AppTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      {time.toLocaleDateString()} {time.toLocaleTimeString()}
    </div>
  );
}

export default AppTime;
