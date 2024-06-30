// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [fish, setFish] = useState([]);
  const [newFish, setNewFish] = useState({ name: '', habitat: '', food: '' });

  useEffect(() => {
    fetch('/api/fish')
      .then((response) => response.json())
      .then((data) => setFish(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFish({ ...newFish, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/fish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFish),
    })
      .then((response) => response.json())
      .then((data) => setFish([...fish, data]));
    setNewFish({ name: '', habitat: '', food: '' });
  };

  return (
    <div>
      <h1>Informasi Ikan</h1>
      <ul>
        {fish.map((fish) => (
          <li key={fish.id}>
            <h2>{fish.name}</h2>
            <p>Habitat: {fish.habitat}</p>
            <p>Makanan: {fish.food}</p>
          </li>
        ))}
      </ul>

      <h2>Tambah Ikan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Masukan Nama Ikan: </label>
          <input
            type="text"
            name="name"
            value={newFish.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Masukan Habitat: </label>
          <input
            type="text"
            name="habitat"
            value={newFish.habitat}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Masukan Makanan: </label>
          <input
            type="text"
            name="food"
            value={newFish.food}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Tambah Ikan</button>
      </form>
    </div>
  );
}
