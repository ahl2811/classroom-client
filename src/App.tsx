import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from './common/constants';

function App() {
  const [rooms, setRooms] = useState<any>([]);
  useEffect(() => {
    const getClasses = async () => {
      const res = await axios.get(SERVER_URL);
      if (res.data) {
        setRooms(res.data);
      }
    };
    getClasses();
  }, []);

  return (
    <div>
      <ul>
        {rooms.length > 0 &&
          rooms.map((room: any) => <li key={room.name}>{room.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
