import { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2026-01-01T00:00:00"); // 카운트다운 목표 날짜
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  return (
    <div className=" text-gray-600 mb-4">
      <h1 className="text-center text-sm">2025년 카운트다운</h1>
      <div>
        <div className="text-center text-sm">
          <span className="mr-2">{timeLeft.days}</span>
          <span className="mr-2">{timeLeft.hours}</span>
          <span className="mr-2">{timeLeft.minutes}</span>
          <span>{timeLeft.seconds}</span>
        </div>
        <div className="text-center text-xs">
          <span>일</span>
          <span className="ml-2">시간</span>
          <span className="ml-2">분</span>
          <span className="ml-3">초</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
