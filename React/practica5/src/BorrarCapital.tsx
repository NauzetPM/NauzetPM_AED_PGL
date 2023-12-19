import React, { useState } from 'react';
import axios from 'axios';

export default function BorrarCapital() {
  const [id, setId] = useState('');

  const handleBorrarCapital = async () => {
    try {

      const capitalId = id;
      const response = await axios.delete(`http://localhost:3000/capitales/${capitalId}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error al borrar el capital:', error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ID del capital a borrar"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleBorrarCapital}>Borrar Capital</button>
    </div>
  );
}
