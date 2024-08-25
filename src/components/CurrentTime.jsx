import React, { useEffect, useState } from 'react';

async function getTimeByTimezone(timezone) {
  const url = `http://worldtimeapi.org/api/timezone/${timezone}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}

function CurrentTime() {
  const timezone = "Europe/London";
  const [timeData, setTimeData] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    getTimeByTimezone(timezone)
      .then(data => {
        if (data) {
          setTimeData(data);
          setCurrentDate(new Date(data.utc_datetime));
        }
      })
      .catch(error => {
        console.error('Failed to fetch time:', error);
      });

    const intervalId = setInterval(() => {
      setCurrentDate(prevDate => new Date(prevDate.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timezone]);

  if (!timeData) {
    return <div>Loading time data...</div>;
  }
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    month: 'long',
    day: 'numeric',
    timeZone: timezone
  });
  
  const current_time = currentDate.toLocaleTimeString("en-GB", {
    timeZone: timezone
  });

  return (
    <section className="current-time">
      <h2>{formattedDate}</h2>
      <h2>{current_time} </h2>
    </section>
  );
}

export default CurrentTime;

