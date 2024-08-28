import React, { useEffect, useState } from 'react';
import CircularProgressBar from './CircularProgressBar';
import '../src/Dashboard.css'; 
import { db, rtdb } from './firebaseConfig';
import { onValue, ref } from 'firebase/database';

const Dashboard = () => {
  const [data, setData] = useState({});
  const dataRef = ref(rtdb, '/sensorData');

  const pressureThreshold = 100;
  const temperatureThreshold = 32;

  useEffect(() => {
    const uns = onValue(dataRef, (snapshot) => {
      const res = snapshot.val();
      setData(res);

      if (res.pressure > pressureThreshold) {
        alert(`Alert: Pressure exceeded threshold! Current pressure: ${res.pressure}`);
      }

      /*if (res.temperature > temperatureThreshold) {
        alert(`Alert: Temperature exceeded threshold! Current temperature: ${res.temperature}`);
      }*/
    });

    return () => uns();
  }, [dataRef]);

  console.log(data);

  return (
    <div className="full" style={{ padding: '20px' }}>
      <div className="box1">
        <div className="row2">
          <p><b>TKPH</b></p>
          <CircularProgressBar val={data.temperature * 8} />
        </div>
        <div className="row2">
          <p><b>Temperature</b></p>
          <CircularProgressBar val={data.temperature} />
        </div>
        <div className="row2">
          <p><b>Pressure on Front Left Wheel</b></p>
          <CircularProgressBar val={data.pressure} />
        </div>
      </div>
      <div className="box1">
        <div className="row1">
          <p><b>Pressure on Front Left Wheel</b></p>
          <CircularProgressBar val={data.pressure} />
        </div>
        <div className="row2">
          <p><b>Pressure on Rear Right Wheel</b></p>
          <CircularProgressBar val={data.pressure} />
        </div>
        <div className="row2">
          <p><b>Pressure on Rear Left Wheel</b></p>
          <CircularProgressBar val={data.pressure} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;