import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TimerProps {
  onTimerEnd?: () => void;
}

const Timer = ({ onTimerEnd }: TimerProps) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive && time > 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="text-2xl font-bold">{formatTime(time)}</div>
      <div className="flex gap-2">
        <Button onClick={handleStart} disabled={isActive}>
          Start
        </Button>
        <Button onClick={handleStop} disabled={!isActive}>
          Stop
        </Button>
        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
