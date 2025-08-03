import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-blue-100 text-sm font-medium px-3 py-2">
      {time.toLocaleTimeString()}
    </span>
  );
};

export default Clock;
