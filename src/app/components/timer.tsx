import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }: {initialTime: number}) => {
  const [time, setTime] = useState(initialTime);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (time <= 0) {
      setIsExpired(true);
      return;
    }

    const timerId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          setIsExpired(true);
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours > 0 ? `${String(hours).padStart(2, '0')} jam` : '',
      minutes > 0 ? `${String(minutes).padStart(2, '0')} menit` : '',
      `${String(secs).padStart(2, '0')} detik`
    ].filter(Boolean).join(' ');
  };

  return (
    <div>
      <br/>
      <h4 className="text-warning">Batas waktu pembayaran</h4>
      {isExpired ? (
        <p>Waktu Habis!</p>
      ) : (
        <p>{formatTime(time)}</p>
      )}
    </div>
  );
};

export default CountdownTimer;
