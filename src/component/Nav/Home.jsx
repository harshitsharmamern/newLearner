import React, { useState } from 'react';
import Papa from 'papaparse';

function Home() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    console.log(json);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default Home;
