import { useEffect } from "react";
import { useState } from "react";

function useDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const dateToString = date.toLocaleTimeString();
      setDate(dateToString);
    }, 1000);
  }, []);

  return date;
}

export { useDate };
